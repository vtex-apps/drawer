import type { Measure } from './parseMeasure'
import parseMeasure from './parseMeasure'

interface Animation {
  prop: string
  object: { [prop: string]: Measure }
  isStopped: () => boolean
  stop: () => void
}

const animations: Animation[] = []

const createAnimation = ({
  object,
  prop,
  stop,
  isStopped,
}: Animation): Animation => ({
  object,
  prop,
  stop,
  isStopped,
})

const stopConflictingAnimations = (animation: Animation) =>
  animations.filter(cur => {
    const isConflicting =
      cur.object === animation.object && cur.prop === animation.prop

    if (isConflicting) {
      cur.stop()
    }

    return !cur.isStopped()
  })

interface AnimationOptions {
  object: { [prop: string]: Measure }
  prop: string
  target: Measure
  duration?: number
  speed?: number
  acceleration?: number
  maxSpeed?: number
  onUpdate?: (value: string) => void
  onComplete?: () => void
}

export function animate({
  object,
  prop,
  target,
  duration,
  speed,
  acceleration,
  maxSpeed,
  onUpdate = undefined,
  onComplete = undefined,
}: AnimationOptions) {
  const targetFps = 60
  const frameDuration = 1000 / targetFps

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [targetValue, targetUnit, isTargetUnitless] = parseMeasure(target)!
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [originValue, originUnit] = parseMeasure(object[prop])!
  const unit = isTargetUnitless ? originUnit : targetUnit
  const delta = targetValue - originValue

  const ease = (v: number) => v * (2 - v)
  const maxTimeMultiplier = 2

  let stopped = false

  const stop = () => {
    stopped = true
  }

  const isStopped = () => {
    return stopped
  }

  let current = duration ? 0 : originValue
  let last: number | null | undefined = null

  const update = (now?: number) => {
    if (stopped) return
    let timeMultiplier = 1

    if (last != null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const deltaTime = now! - last

      timeMultiplier = deltaTime / frameDuration
      if (timeMultiplier > maxTimeMultiplier) timeMultiplier = maxTimeMultiplier
    }

    last = now

    if (duration) {
      const step = frameDuration / (duration * 1000)

      current += step * timeMultiplier
      if (current >= 1) {
        current = 1
        if (onComplete != null) {
          onComplete()
        }

        stop()
      }

      const value = `${originValue + ease(current) * delta}${unit}`

      object[prop] = value

      if (onUpdate != null) {
        onUpdate(value)
      }
    } else if (speed) {
      current += speed / (targetFps * timeMultiplier)

      if (acceleration) {
        speed *= acceleration
      }

      if (maxSpeed && speed > maxSpeed) {
        speed = maxSpeed
      }

      if (
        (speed > 0 && current >= targetValue) ||
        (speed < 0 && current <= targetValue)
      ) {
        current = targetValue
        if (onComplete != null) {
          onComplete()
        }

        stop()
      }

      const formattedValue = `${current}${unit}`

      object[prop] = formattedValue

      if (onUpdate != null) {
        onUpdate(formattedValue)
      }
    }

    requestAnimationFrame(update)
  }

  update()

  const animation = createAnimation({ object, prop, stop, isStopped })

  stopConflictingAnimations(animation)

  animations.push(animation)

  return stop
}

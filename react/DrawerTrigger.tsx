import React from 'react'
import { usePixel, PixelEventTypes } from 'vtex.pixel-manager'
import { useCssHandles } from 'vtex.css-handles'

interface Props {
  customPixelEventId?: string
}

const CSS_HANDLES = ['drawerTriggerContainer'] as const

const DrawerTrigger: React.FC<Props> = ({ children, customPixelEventId }) => {
  const { push } = usePixel()
  const handles = useCssHandles(CSS_HANDLES)

  const handleInteraction = () => {
    if (!customPixelEventId) {
      return
    }

    const pixelEvent: PixelEventTypes.PixelData = {
      id: customPixelEventId,
      event: 'openDrawer',
    }

    push(pixelEvent)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={handles.drawerTriggerContainer}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
    >
      {children}
    </div>
  )
}

export default DrawerTrigger

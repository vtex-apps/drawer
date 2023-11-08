import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { IconClose } from 'vtex.store-icons'
import { useIntl } from 'react-intl'

import { useDrawer } from './DrawerContext'

const CSS_HANDLES = ['closeIconButton'] as const

interface Props {
  size?: number
  type?: 'filled' | 'line'
  text?: string
}

const DrawerCloseButton: React.FC<Props> = ({
  size = 30,
  type = 'line',
  text,
}) => {
  const { close } = useDrawer()
  const intl = useIntl()

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <button
      className={`${handles.closeIconButton} pa4 pointer bg-transparent transparent bn pointer`}
      id="closeIcon"
      aria-label={intl.formatMessage({
        id: 'store/drawer.close-button',
      })}
      onClick={close}
    >
      {text ?? <IconClose size={size} type={type} />}
    </button>
  )
}

export default DrawerCloseButton

import ReactDOM from 'react-dom'
import { useSSR } from 'vtex.render-runtime/react/components/NoSSR'

const Portal: React.FunctionComponent = ({ children }) => {
  const body = window?.document?.body
  const isSSR = useSSR()

  if (!body || isSSR) {
    return null
  }

  return ReactDOM.createPortal(children, body)
}

export default Portal

import React from 'react'
import ReactDOM from 'react-dom'


export const PortalDom = () => {
  return ReactDOM.createPortal(
    <p>PortalDom</p>,
    document.getElementById('portal-dom')
  )
}

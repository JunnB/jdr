import React from 'react'
import { withRouter } from 'react-router'

const LinkButton = (props) => {
  const {
    history,
    to,
    onClick,
    className,
    label
  } = props
  return (
    <button
      className={className}
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >{label}</button>
  )
}

export default withRouter(LinkButton);

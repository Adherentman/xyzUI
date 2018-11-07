import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { boxStyle } from '../styles/style'

const Box = ({ children, component: Component, container, ...other }) => {
  const boxStyles = classNames({
    [boxStyle.container]: container
  })
  return (
    <Component className={boxStyles} {...other}>
      {children}
    </Component>
  )
}

Box.defaultProps = {}

Box.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  container: PropTypes.bool
}

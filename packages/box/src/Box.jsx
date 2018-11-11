import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { boxStyle } from '../styles/style'

const Box = ({ children, component: Component, containerFluid, ...other }) => {
  const boxStyles = classNames(boxStyle.container, {
    // [boxStyle.container]: container,
    [boxStyle.containerFluid]: containerFluid
  })
  return (
    <Component className={boxStyles} {...other}>
      {children}
    </Component>
  )
}

Box.defaultProps = {
  component: 'div'
}

Box.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  // container: PropTypes.bool,
  containerFluid: PropTypes.bool
}

export default Box

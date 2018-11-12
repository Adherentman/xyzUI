import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { boxStyle } from '../styles/style'

const Box = ({
  children,
  component: Component,
  containerFluid,
  spacing,
  ...other
}) => {
  const boxStyles = classNames(boxStyle.container, {
    // [boxStyle.container]: container,
    [boxStyle.containerFluid]: containerFluid,
    [boxStyle[`spacing-xs-${String(spacing)}`]]: spacing !== 0
  })
  return (
    <Component className={boxStyles} {...other}>
      {children}
    </Component>
  )
}

Box.defaultProps = {
  component: 'div',
  spacing: 0
}

Box.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  // container: PropTypes.bool,
  containerFluid: PropTypes.bool,
  spacing: PropTypes.any
}

export default Box

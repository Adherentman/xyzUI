import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { boxStyle } from '../styles/style'

const Box = ({
  children,
  component: Component,
  flexbox,
  spacing,
  justify,
  ...other
}) => {
  const boxStyles = classNames({
    [boxStyle.flexBox]: flexbox,
    [boxStyle[`spacing-xs-${String(spacing)}`]]: spacing !== 0,
    [boxStyle[`justify-${String(justify)}`]]: justify !== 'flex-start'
  })
  return (
    <Component className={boxStyles} {...other}>
      {children}
    </Component>
  )
}

Box.defaultProps = {
  component: 'div',
  spacing: 0,
  justify: 'flex-start'
}

Box.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  flexbox: PropTypes.bool,
  spacing: PropTypes.any
}

export default Box

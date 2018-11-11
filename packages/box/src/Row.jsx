import React from 'react'
import PropTypes from 'prop-types'
import { boxStyle } from '../styles/style'

const Row = ({ children, component: Component, ...other }) => {
  return (
    <Component className={boxStyle.row} {...other}>
      {children}
    </Component>
  )
}

Row.defaultProps = {
  component: 'div'
}

Row.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node
}

export default Row

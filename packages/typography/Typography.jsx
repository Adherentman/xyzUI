import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { typographyStyle } from './styles/style'

// 首字母大写
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Typography = ({
  children,
  component: Component,
  size,
  align,
  noWarp,
  ...other
}) => {
  const typographyStyles = classNames(typographyStyle.typographyFont, {
    [typographyStyle[`size${capitalize(size)}`]]: size !== '',
    [typographyStyle[`tx${capitalize(align)}`]]: align !== 'inherit',
    [typographyStyle.noWarp]: noWarp
  })
  return (
    <Component className={typographyStyles} {...other}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  component: 'p',
  size: '',
  align: 'inherit'
}

Typography.propTypes = {
  /**
  * The content of the component.
  */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
  * Applies the theme typography styles.
  */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'body', 'button']),
  /**
  * Set the text-align on the component.
  */
  align: PropTypes.oneOf(['inherit', 'center', 'left', 'right', 'justify']),
  /**
  * If true, the text will not wrap, but instead will truncate with an ellipsis.
 */
  noWarp: PropTypes.bool
}

export default Typography

// 首字母大写
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = config => ({
  filename: `${capitalize(config)}.jsx`,
  contents: `import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ${capitalize(config)} = ({
  children,
  component: Component,
  ...other
}) => {
  const ${config}Styles = classNames()
  return (
    <Component className={${config}Styles} {...other}>
      {children}
    </Component>
  )
}

${capitalize(config)}.defaultProps = {}

${capitalize(config)}.propTypes = {
  /**
  * The content of the component.
  */
  children: PropTypes.node
}
`
})

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles/style.scss'

// 首字母大写
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

const Typography = (props) => {
	const {
		children, size, align, noWarp
	} = props

	const typographyStyle = classNames(styles.typographyFont, {
		[styles[`size${capitalize(size)}`]]: size !== '',
		[styles[`tx${capitalize(align)}`]]: align !== 'inherit',
		[styles.noWarp]: noWarp,
	})

	return (
		<React.Fragment>
			<span className={typographyStyle}>{children}</span>
		</React.Fragment>
	)
}

Typography.propTypes = {
	/** The content of the component. */
	children: PropTypes.node.isRequired,
	/** Applies the theme typography styles.  */
	size: PropTypes.oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'title',
		'body',
		'button'
	]),
	/** Set the text-align on the component. */
	align: PropTypes.oneOf(['inherit', 'center', 'left', 'right', 'justify']),
	/** If true, the text will not wrap, but instead will truncate with an ellipsis. */
	noWarp: PropTypes.bool,
}

Typography.defaultProps = {
	size: '',
	align: 'inherit',
	noWarp: false,
}

export default Typography

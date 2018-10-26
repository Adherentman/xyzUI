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
	/** children */
	children: PropTypes.node.isRequired,
	/** size big */
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
	/** align */
	align: PropTypes.oneOf(['inherit', 'center', 'left', 'right', 'justify']),
	/** nowarp */
	noWarp: PropTypes.bool,
}

Typography.defaultProps = {
	size: '',
	align: 'inherit',
	noWarp: false,
}

export default Typography

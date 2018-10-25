import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles/style.scss'

// 首字母大写
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function Typography(props) {
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
	children: PropTypes.node.isRequired,
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
	align: PropTypes.oneOf(['inherit', 'center', 'left', 'right', 'justify']),
	noWarp: PropTypes.bool,
}

Typography.defaultProps = {
	size: '',
	align: 'inherit',
	noWarp: false,
}

export default Typography

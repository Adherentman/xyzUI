import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles/style.scss'

function Typography(props) {
	const { children, size } = props

	const typographyStyle = classNames(styles.typographyFont, {
		[styles.sizeH1]: size === 'h1',
		[styles.sizeH2]: size === 'h2',
		[styles.sizeH3]: size === 'h3',
		[styles.sizeH4]: size === 'h4',
		[styles.sizeH5]: size === 'h5',
		[styles.sizeH6]: size === 'h6',
		[styles.sizeTitle]: size === 'title',
		[styles.sizeBody]: size === 'body',
		[styles.sizeButton]: size === 'button',
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
}

Typography.defaultProps = {
	size: '',
}

export default Typography

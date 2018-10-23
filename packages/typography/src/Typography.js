import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles/style.scss'

function Typography(props) {
	const { children, size } = props

	const typographyStyle = classNames(styles.typographyFont, {
		[styles.sizeH1]: size === 'H1',
		[styles.sizeH2]: size === 'H2',
		[styles.sizeH3]: size === 'H3',
		[styles.sizeH4]: size === 'H4',
		[styles.sizeH5]: size === 'H5',
		[styles.sizeH6]: size === 'H6',
		[styles.sizeTitle]: size === 'Title',
		[styles.sizeBody]: size === 'Body',
		[styles.sizeButton]: size === 'Button',
	})
	return (
		<React.Fragment>
			<span className={typographyStyle}>{children}</span>
		</React.Fragment>
	)
}

Typography.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
}

Typography.defaultProps = {
	size: '',
}

export default Typography

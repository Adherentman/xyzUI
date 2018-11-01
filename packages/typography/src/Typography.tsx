import * as React from 'react'
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
import styles from './styles/style.scss'

interface ITypographyProps {
	/**
	 * The content of the component.
	 */
	children: React.ReactNode;
	/**
	 * The element
	 */
	component?: string | React.ComponentType;
	/**
	 * Applies the theme typography styles.
	 * @default ''
	 */
	size?:
		| ''
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'title'
		| 'body'
		| 'button';
	/**
	 * Set the text-align on the component.
	 * @default inherit
	 */
	align?: 'inherit' | 'center' | 'left' | 'right' | 'justify';
	/**
	 * If true, the text will not wrap, but instead will truncate with an ellipsis.
	 * @default boolean
	 */
	noWarp?: boolean;
}

// 首字母大写
function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

class Typography extends React.PureComponent<ITypographyProps, {}> {
	static defaultProps: Partial<ITypographyProps> = {
		component: 'span',
		size: '',
		align: 'inherit',
	}

	static propTypes = {
		children: PropTypes.node.isRequired,
		/** Applies the theme typography styles.  */
		size: PropTypes.oneOf([
			'',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'title',
			'body',
			'button',
		]),
		/** Set the text-align on the component. */
		align: PropTypes.oneOf(['inherit', 'center', 'left', 'right', 'justify']),
		/** If true, the text will not wrap, but instead will truncate with an ellipsis. */
		noWarp: PropTypes.bool,
	}

	render(): React.ReactNode {
		const {
			children,
			component: Component,
			size,
			align,
			noWarp,
			...other
		} = this.props

		const typographyStyle = classNames(styles.typographyFont, {
			[styles[`size${capitalize(size)}`]]: size !== '',
			[styles[`tx${capitalize(align)}`]]: align !== 'inherit',
			[styles.noWarp]: noWarp,
		})
		return (
			<Component className={typographyStyle} {...other}>
				{children}
			</Component>
		)
	}
}

export default Typography

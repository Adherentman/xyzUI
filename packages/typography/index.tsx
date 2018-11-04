import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { typographyStyle } from './styles/style';

export interface ITypographyProps {
	/**
	 * The content of the component.
	 */
	children: React.ReactNode;
	/**
	 * The element
	 */
	component?: string | React.ComponentType<ITypographyProps>;
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
	align?: string | 'inherit' | 'center' | 'left' | 'right' | 'justify';
	/**
	 * If true, the text will not wrap, but instead will truncate with an ellipsis.
	 * @default boolean
	 */
	noWarp?: boolean;
}

// 首字母大写
function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const Typography: React.SFC<ITypographyProps> = ({
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
		[typographyStyle.noWarp]: noWarp,
	});
	return (
		<Component className={typographyStyles} {...other}>
			{children}
		</Component>
	);
};

Typography.defaultProps = {
	component: 'p',
	size: '',
	align: 'inherit',
};

export default Typography;

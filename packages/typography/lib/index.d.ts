import * as React from 'react';
interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * The content of the component.
	 */
	children: React.ReactNode;
	/**
	 * The element
	 */
	component: string | React.ComponentType;
	/**
	 * Applies the theme typography styles.
	 * @default ''
	 */
	size:
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
	align: string | 'inherit' | 'center' | 'left' | 'right' | 'justify';
	/**
	 * If true, the text will not wrap, but instead will truncate with an ellipsis.
	 * @default boolean
	 */
	noWarp: boolean;
}
declare const Typography: React.SFC<ITypographyProps>;
export default Typography;

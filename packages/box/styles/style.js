import { css } from 'emotion';

export const boxStyle = {
	/**
	 * default flex Css
	 * flexDirection: 'row'
	 * flexWrap: 'nowrap'
	 * justifyContent: 'flex-start'
	 * alignItems: 'flex-start'
	 */
	container: css({
		boxSizing: 'border-box',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
	}),
};

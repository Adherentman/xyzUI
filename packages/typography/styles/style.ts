import { css } from 'emotion';

export interface ItypographyStyle {
	[key: string]: any;
	typographyFont: any;
	sizeH1: any;
	sizeH2: any;
	sizeH3: any;
	sizeH4: any;
	sizeH5: any;
	sizeH6: any;
	sizeBody: any;
	sizeTitle: any;
	sizeButton: any;
	txCenter: any;
	txLeft: any;
	txRight: any;
	txInherit: any;
	txJustify: any;
	noWarp: any;
}

export const typographyStyle: ItypographyStyle = {
	typographyFont: css({
		display: 'block',
		margin: 0,
	}),
	sizeH1: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
		fontSize: '6rem',
		lineHeight: 1,
		letterSpacing: '-0.01562em',
	}),
	sizeH2: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '3.75rem',
		lineHeight: 1,
		letterSpacing: '-0.00833em',
	}),
	sizeH3: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '3rem',
		lineHeight: 1.04,
		letterSpacing: '0em',
	}),
	sizeH4: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '2.125rem',
		lineHeight: 1.17,
		letterSpacing: '0.00735em',
	}),
	sizeH5: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '1.5rem',
		lineHeight: 1.33,
		letterSpacing: '0em',
	}),
	sizeH6: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '1.25rem',
		lineHeight: 1.6,
		letterSpacing: '0.00735em',
	}),
	sizeBody: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '0.875rem',
		lineHeight: 1.57,
		letterSpacing: '0.01071em',
	}),
	sizeTitle: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '1rem',
		lineHeight: 1.2,
		letterSpacing: '0.00938em',
	}),
	sizeButton: css({
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 500,
		fontSize: '0.875rem',
		lineHeight: 1.5,
		letterSpacing: '0.02857em',
		textTransform: 'uppercase',
	}),
	txCenter: css({
		textAlign: 'center',
	}),
	txLeft: css({
		textAlign: 'left',
	}),
	txRight: css({
		textAlign: 'right',
	}),
	txInherit: css({
		textAlign: 'inherit',
	}),
	txJustify: css({
		textAlign: 'justify',
	}),
	noWarp: css({
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
};

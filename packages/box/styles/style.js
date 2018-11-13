import { css } from 'emotion'
import facepaint from 'facepaint'

// const gridGutterWidth = 30

const GUTTERS = [0, 8, 16, 24, 32, 40]

/**
 * xs: 0
 * sm: 576
 * md: 768
 * lg: 992
 * xl: 1200
 */
const gridBreakpoints = [ 576, 768, 992, 1200 ]

// contaniar @media
const makeContainerMaxWidths = facepaint(
  gridBreakpoints.map(bp => `@media (min-width: ${bp}px)`), { literal: true }
)

// .contaniar
const makeContainer = () => {
  let baseContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    width: '100%'
  }
  return baseContainer
}

const generateGutter = (breakpoint) => {
  const styles = {}

  GUTTERS.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return
    }

    styles[`spacing-${breakpoint}-${spacing}`] = css({
      // margin: -spacing / 2,
      width: `calc(100% + ${spacing}px)`
      // '& > .css-1umg8wx': {
      // padding: spacing / 2
      // }
    })
  })

  return styles
}

export const boxStyle = {
  /**
   * default flex Css
   * flexDirection: 'row'
   * flexWrap: 'nowrap'
   * justifyContent: 'flex-start'
   * alignItems: 'flex-start'
   * flex: 0 1 auto
   */
  flexBox: css(
    makeContainer(),
    makeContainerMaxWidths({ maxWidth: [
      540,
      720,
      960,
      1140]
    })
  ),
  'justify-center': css({
    justifyContent: 'center'
  }),
  /* Styles applied to the root element if `justify="flex-end"`. */
  'justify-end': css({
    justifyContent: 'flex-end'
  }),
  /* Styles applied to the root element if `justify="space-between"`. */
  'justify-space-between': css({
    justifyContent: 'space-between'
  }),
  /* Styles applied to the root element if `justify="space-around"`. */
  'justify-space-around': css({
    justifyContent: 'space-around'
  }),
  /* Styles applied to the root element if `justify="space-evenly"`. */
  'justify-space-evenly': css({
    justifyContent: 'space-evenly'
  }),
  ...generateGutter('xs')
}

console.log(boxStyle)

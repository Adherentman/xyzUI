import { css } from 'emotion'
import facepaint from 'facepaint'

const gridGutterWidth = 30

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
    width: '100%',
    paddingRight: (gridGutterWidth / 2),
    paddingLeft: (gridGutterWidth / 2),
    boxSizing: 'border-box',
    marginRight: 'auto',
    marginLeft: 'auto'
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
      margin: -spacing / 2,
      width: `calc(100% + ${spacing}px)`,
      '& .css-1jwsg2l': {
        padding: spacing / 2
      }
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
  container: css(
    makeContainer(),
    makeContainerMaxWidths({ maxWidth: [
      540,
      720,
      960,
      1140]
    })
  ),
  containerFluid: css(
    makeContainer()
  ),
  row: css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -(gridGutterWidth / 2),
    marginRight: -(gridGutterWidth / 2)
  }),
  ...generateGutter('xs')
}

console.log(boxStyle)

import { css } from 'emotion'
import facepaint from 'facepaint'

const gridGutterWidth = 30

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
    display: 'flex',
    flexWrap: 'wrap'

    // marginRight: 'auto',
    // marginLeft: 'auto'
  }
  return baseContainer
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
  )
}

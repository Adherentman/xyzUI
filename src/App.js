import React from 'react'
import { hot } from 'react-hot-loader'
// import TypographyExample from '../example/Typography'
import BoxExample from '../example/Box'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BoxExample />
      </React.Fragment>
    )
  }
}

export default hot(module)(App)

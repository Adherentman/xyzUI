import React from 'react'
import { hot } from 'react-hot-loader'
import TypographyExample from '../example/Typography'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <TypographyExample />
      </React.Fragment>
    )
  }
}

export default hot(module)(App)

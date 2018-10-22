import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import Typography from '../packages/typography/lib'

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div> hello world</div>
				<Typography />
			</React.Fragment>
		)
	}
}

const HotApp = hot(module)(App)

ReactDOM.render(<HotApp />, document.getElementById('root'))

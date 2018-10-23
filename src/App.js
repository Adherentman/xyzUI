import React from 'react'
import { hot } from 'react-hot-loader'
import Typography from '../packages/typography/lib'

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div> hello world</div>
				<div>
					<Typography size="H1">hhh</Typography>
				</div>
				<div>
					<Typography size="H2">hhh</Typography>
				</div>
				<div>
					<Typography size="H3">hhh</Typography>
				</div>
				<div>
					<Typography size="H4">hhh</Typography>
				</div>
				<div>
					<Typography size="H5">hhh</Typography>
				</div>
				<div>
					<Typography size="H6">hhh</Typography>
				</div>
				<div>
					<Typography size="Title">hhh</Typography>
				</div>
				<div>
					<Typography size="Body">hhh</Typography>
				</div>
				<div>
					<Typography size="Button">hhh</Typography>
				</div>
			</React.Fragment>
		)
	}
}

export default hot(module)(App)

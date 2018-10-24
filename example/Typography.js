import React from 'react'
import Typography from '../packages/typography/lib'

function TypographyExample() {
	return (
		<React.Fragment>
			<div>
				<Typography size="h1">标题1</Typography>
			</div>
			<div>
				<Typography size="h2">标题2</Typography>
			</div>
			{/* <div>
		<Typography size="h3">hhh</Typography>
	</div>
	<div>
		<Typography size="h4">hhh</Typography>
	</div>
	<div>
		<Typography size="h5">hhh</Typography>
	</div>
	<div>
		<Typography size="h6">hhh</Typography>
	</div>
	<div>
		<Typography size="title">hhh</Typography>
	</div> */}
			<div>
				<Typography size="body">
					这是拥有标准行高的段落。 在大多数浏览器中默认行高大约是 110% 到 120%。
					这是拥有标准行高的段落。 这是拥有标准行高的段落。
					这是拥有标准行高的段落。 这是拥有标准行高的段落。
					这是拥有标准行高的段落。
				</Typography>
			</div>
			<div>
				<Typography size="button">hhh</Typography>
			</div>
		</React.Fragment>
	)
}

export default TypographyExample

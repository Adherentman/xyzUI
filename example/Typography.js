import React from 'react'
import Typography from '../packages/typography/lib'

function TypographyExample () {
  return (
    <React.Fragment>
      <Typography size='h1' align='center'>
				标题1
      </Typography>
      <Typography size='h2' align='right'>
				标题2
      </Typography>
      {/* <Typography size="h3">hhh</Typography>
			<Typography size="h4">hhh</Typography>
			<Typography size="h5">hhh</Typography>
			<Typography size="h6">hhh</Typography>
			<Typography size="title">hhh</Typography>
 			*/}
      <Typography size='body'>
				这是拥有标准行高的段落。 在大多数浏览器中默认行高大约是 110% 到 120%。
				这是拥有标准行高的段落。 这是拥有标准行高的段落。
				这是拥有标准行高的段落。 这是拥有标准行高的段落。
				这是拥有标准行高的段落。
      </Typography>
      <Typography size='button'>hhh</Typography>
    </React.Fragment>
  )
}

export default TypographyExample

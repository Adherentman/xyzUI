import React from 'react'
import Box from '../packages/box/src/Box'
import Row from '../packages/box/src/Row'

const BoxExample = () => {
  return (
    <Box spacing={40}>
      <Row>
        <div style={{ background: 'green' }}>aaa</div>
        <div style={{ background: 'red' }}>aaa</div>
        <div style={{ background: 'blue' }}>aaa</div>
      </Row>
    </Box>
  )
}

export default BoxExample

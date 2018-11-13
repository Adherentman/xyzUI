import React from 'react'
import Box from '../packages/box/src/Box'

const BoxExample = () => {
  return (
    <Box flexbox spacing={16}>
      <Box flexbox justify='space-between'>
        <div style={{ background: 'green', height: 140, width: 100 }}>bbb</div>
        <div style={{ background: 'red', height: 140, width: 100 }}>bbb</div>
        <div style={{ background: 'blue', height: 140, width: 100 }}>bbb</div>
      </Box>
    </Box>
  )
}

export default BoxExample

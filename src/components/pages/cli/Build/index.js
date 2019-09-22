import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'

const InvocationsExplorer = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <video autoPlay muted className='cli-video' controls>
      <source
        src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/cli/CLI01.mp4'
        type='video/mp4'
      />
    </video>
  </Flex>
)

export default InvocationsExplorer

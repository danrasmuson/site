import React from 'react'
import { Flex, Image, Box } from 'serverless-design-system'
import {
  HeroTitle,
  HeroMainTitle,
  HeroInlineDescription,
} from 'src/fragments/DesignSystem/HeroElements'

import serverlessBolt from 'src/assets/images/serverlessBolt.png'

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter flexDirection='column'>
    <Flex.horizontallyCenter height='86px' mt={[1, 1, 6, 5, 3]} mb={'5px'}>
      <Image
        src={serverlessBolt}
        height={['70px', '70px', '70px', '70px', '67px']}
        width={['50px', '50px', '50px', '50px', '44px']}
      />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle mb={[32, 32, 32, 32, 52]}>
      framework enterprise
    </HeroMainTitle>
    <Box width={[1, 1, 0.69, 0.69, 0.37]} mx='auto'>
      <HeroInlineDescription>
        Scale your serverless development with dashboards, collaboration tools
        and 24/7 dedicated support.
      </HeroInlineDescription>
    </Box>
  </Flex.horizontallyCenter>
)

export default Header

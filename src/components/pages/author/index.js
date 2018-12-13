import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'

import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import Links from './Profile/Links'
import Blogs from './Blogs/Blogs'

const Profile = ({ author, allBlog }) => {
  const edges = allBlog ? (allBlog.edges || []) : []

  return (
  <AppContainer>
    <ResponsiveStack mt={[2, 2, 5]}>
      <Column
        width={[1, 1, 0.25]}
        alignItems={["center", "center", "flex-end"]}
        my={2}
      >
        <Avatar avatar={author.avatar} />
        <Links
          personalWebsite={author.site}
          githubHandle={author.github}
          twitterHandle={author.twitter}
          mediumHandle={author.medium}
        />
      </Column>
      <Column
        width={[1, 1, 0.6]}
        alignItems='center'
        my={2}
      >
        <Bio
          authorName={author.name}
          bio={author.bio.long || author.bio.short}
        />
      </Column>
      <Column
        width={[1, 1, 0.4]}
      >
        <Blogs
          authorName={author.name.split(' ')[0]}
          blogs={edges.map(({ node }) => (node))}
        />
      </Column>
    </ResponsiveStack>
  </AppContainer>
)
}

Profile.defaultProps = { author: {} }
export default Profile

import { Box } from 'native-base'

import PostImage from '../../../atoms/Image/PostImage'
import Heading from '../../../atoms/Typography/Post/Heading'
import Text from '../../../atoms/Typography/Post/Text'

export default function PostContent({ avatarUrl }: { avatarUrl: string }) {
  return (
    <Box alignItems="center">
      <PostImage avatarUrl={avatarUrl} />
      <Heading>Lorem ipsum dolor sit</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nesciunt error,
        distinctio tempora ea totam. Quis veniam quae temporibus, neque ab vitae, consectetur totam
        explicabo mollitia quod sunt modi laudantium!
      </Text>
    </Box>
  )
}

import { Box } from 'native-base'
import { itemType } from '../../../mocks'

import PostFooter from '../../molecules/Posts/PostFooter'
import PostContent from '../../molecules/Posts/PostContent'

interface Props {
  item: itemType
}

export default function Posts({ item }: Props) {
  const { avatarUrl, fullName, timeStamp } = item
  return (
    <Box flex={1} marginBottom={4} padding={2}>
      <PostContent avatarUrl={avatarUrl} />
      <PostFooter fullName={fullName} timeStamp={timeStamp} />
    </Box>
  )
}

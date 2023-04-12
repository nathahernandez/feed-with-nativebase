import { Box } from 'native-base'
import PostList from './PostList'

export default function Feed() {
  return (
    <Box flex={9}>
      <PostList />
    </Box>
  )
}

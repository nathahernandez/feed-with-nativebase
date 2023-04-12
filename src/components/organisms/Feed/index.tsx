import { Box, FlatList } from 'native-base'

import Posts from '../../molecules/Posts'
import { data } from '../../../mocks'

export default function Feed() {
  return (
    <Box flex={1} alignItems="center">
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Posts item={item} />}
      />
    </Box>
  )
}

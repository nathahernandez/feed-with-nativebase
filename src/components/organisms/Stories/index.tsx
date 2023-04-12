import { Box, FlatList } from 'native-base'

import { data } from '../../../mocks'
import Story from '../../molecules/Story'

export default function Stories() {
  return (
    <Box alignItems="center">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Story avatarUrl={item.avatarUrl} />}
      />
    </Box>
  )
}

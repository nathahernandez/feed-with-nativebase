import { FlashList } from '@shopify/flash-list'
import { Box, Spinner } from 'native-base'

import { data } from '../../../../mocks'
import Story from '../../../molecules/Story'

export default function StoriesList() {
  return (
    <Box width="100%" alignItems="center" justifyContent="center">
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Story avatarUrl={item.avatarUrl} />}
        estimatedItemSize={320}
      />
    </Box>
  )
}

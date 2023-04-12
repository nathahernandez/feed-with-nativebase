import { FlashList } from '@shopify/flash-list'
import { data } from '../../../../mocks'
import Posts from '../../../molecules/Posts'
import { View } from 'react-native'

export default function PostList() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <FlashList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Posts item={item} />}
        estimatedItemSize={10}
      />
    </View>
  )
}

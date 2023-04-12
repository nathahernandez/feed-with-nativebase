import { Box } from 'native-base'
import { View } from 'native-base'

import Feed from '../../components/organisms/Feed'
import Stories from '../../components/organisms/Stories'
import Header from '../../components/organisms/Header'

export default function Home() {
  return (
    <Box flex={1} backgroundColor="#fff" flexDirection="column">
      <Header />
      <Stories />
      <Feed />
    </Box>
  )
}

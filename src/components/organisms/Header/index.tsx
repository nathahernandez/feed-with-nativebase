import { HStack, Box, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

import Avatar from '../../atoms/Image/Avatar'

export default function Header() {
  return (
    <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between">
      <Box>
        <Icon as={Feather} name="menu" size={8} color="#000" />
      </Box>
      <Box rounded="md" flexDir="row" alignItems="center">
        <Icon as={Feather} name="bell" size={8} color="#000" marginRight={2} />
        <Avatar avatarUrl="https://github.com/nathahernandez.png" width={10} height={10} />
      </Box>
    </HStack>
  )
}

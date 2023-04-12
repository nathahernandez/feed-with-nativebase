import { Box, Text } from 'native-base'

import ProfileIcon from '../../../atoms/Icons/Profile'
import TimeIcon from '../../../atoms/Icons/Time'

interface Props {
  fullName: string
  timeStamp: string
}

export default function PostFooter({ fullName, timeStamp }: Props) {
  return (
    <Box
      flex={1}
      marginTop={4}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      opacity={0.7}
    >
      <Box flexDir="row">
        <ProfileIcon marginRight={2} />
        <Text numberOfLines={1}>{fullName}</Text>
      </Box>
      <Box flexDir="row" alignItems="center" justifyContent="center">
        <Text>{timeStamp}</Text>
        <TimeIcon marginLeft={2} />
      </Box>
    </Box>
  )
}

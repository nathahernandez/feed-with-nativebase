import { Box } from 'native-base'
import Avatar from '../../atoms/Image/Avatar'

interface Props {
  avatarUrl: string
}

export default function Story({ avatarUrl }: Props) {
  return (
    <Box flex={1} padding={2} rounded="sm">
      <Avatar avatarUrl={avatarUrl} />
    </Box>
  )
}

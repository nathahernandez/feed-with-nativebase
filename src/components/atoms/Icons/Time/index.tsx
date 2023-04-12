import { Feather } from '@expo/vector-icons'
import { Icon } from 'native-base'

interface Props extends React.ComponentProps<typeof Icon> {}

export default function TimeIcon({ ...props }: Props) {
  return <Icon as={Feather} name="clock" color="#000" {...props} />
}

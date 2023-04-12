import { Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

interface Props extends React.ComponentProps<typeof Icon> {}

export default function ProfileIcon({ ...props }: Props) {
  return <Icon as={Feather} name="user" color="#000" {...props} />
}

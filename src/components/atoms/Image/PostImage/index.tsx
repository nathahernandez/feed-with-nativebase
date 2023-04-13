import { Image } from 'native-base'

export default function PostImage({ avatarUrl }: { avatarUrl: string }) {
  return (
    <Image
      source={{
        uri: avatarUrl,
      }}
      alt="Post image"
      width="2xl"
      height="32"
      blurRadius={2}
      rounded="xl"
    />
  )
}

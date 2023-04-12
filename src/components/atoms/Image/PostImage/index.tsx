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
      blurRadius={4}
      rounded="xl"
    />
  )
}

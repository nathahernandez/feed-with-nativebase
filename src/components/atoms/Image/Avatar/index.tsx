import { Image, Box, Pressable } from 'native-base'

interface Props extends React.ComponentProps<typeof Image> {
  avatarUrl: string
}

export default function Avatar({ avatarUrl, ...props }: Props) {
  return (
    <Pressable>
      {({ isPressed }) => {
        return (
          <Box
            padding={0.5}
            rounded="full"
            bg={{
              linearGradient: {
                colors: ['#000', '#FFF'],
              },
            }}
            style={{
              transform: [
                {
                  scale: isPressed ? 1.025 : 1,
                },
              ],
            }}
          >
            <Image
              source={{
                uri: avatarUrl,
              }}
              width={16}
              height={16}
              borderRadius={32}
              alt={`Avatar, Imagem de Perfil`}
              {...props}
            />
          </Box>
        )
      }}
    </Pressable>
  )
}

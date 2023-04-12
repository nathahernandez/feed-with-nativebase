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
            padding={0.25}
            rounded="full"
            bg={{
              linearGradient: {
                colors: ['#E2E2E2', '#FB3640', '#0A2463'],
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
              rounded="full"
              alt={`Avatar, Imagem de Perfil`}
              {...props}
            />
          </Box>
        )
      }}
    </Pressable>
  )
}

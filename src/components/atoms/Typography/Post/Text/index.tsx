import { Text as TextNB } from 'native-base'

export default function Text({ children }: { children: React.ReactNode }) {
  return (
    <TextNB numberOfLines={2} alignSelf="flex-start">
      {children}
    </TextNB>
  )
}

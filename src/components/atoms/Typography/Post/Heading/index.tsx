import { Heading as HeadingNB } from 'native-base'

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <HeadingNB size="sm" marginY={2}>
      {children}
    </HeadingNB>
  )
}

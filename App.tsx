import { NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import Home from './src/screens/Home'

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

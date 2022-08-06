import { ChakraProvider } from '@chakra-ui/react'
import 'reset-css'
import { theme } from '../styles/style'
import type { AppProps } from 'next/app'
import { PlayerLayout } from '../components/PlayerLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default MyApp

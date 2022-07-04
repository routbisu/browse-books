import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { RecoilRoot } from 'recoil'

const root = createRoot(document.getElementById('root'))

root.render(
  <ChakraProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ChakraProvider>
)

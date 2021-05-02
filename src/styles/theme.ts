import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },
    gray: {
      '600': '#47585B',
      '300': '#999999',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600',
      },
    },
  },
})

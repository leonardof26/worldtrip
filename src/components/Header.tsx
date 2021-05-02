import Link from 'next/link'

import { Box, Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      pt='auto'
      py='3'
      mt='4'
      align='center'
      justify='center'
    >
      <Link href='/' passHref>
        <Box as='a'>
          <Image alt='world trips' src='/images/logo.svg' w='160px' h='auto' />
        </Box>
      </Link>
    </Flex>
  )
}

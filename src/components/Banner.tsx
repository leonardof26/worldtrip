import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      backgroundImage='url(/images/sky.png)'
      w='100%'
      px='28'
      align='center'
      pos='relative'
      h='300px'
    >
      <Box maxW='530px'>
        <Stack spacing='4'>
          <Text color='white' fontWeight='500' fontSize='3xl' lineHeight='45px'>
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text lineHeight='30px' color='gray.200'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
      </Box>

      <Box pos='absolute' right='40' top='24'>
        <Image src='/images/airplane.png' alt='airplane' width='350px' />
      </Box>
    </Flex>
  )
}

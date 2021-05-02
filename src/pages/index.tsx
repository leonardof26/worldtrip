import { Box, Text, Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { ContinentsSwiper } from '../components/ContinentsSwiper'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex flexDirection='column' justify='center' align='center'>
      <Banner />
      <TravelTypes />

      <Box
        w='20'
        borderTop='2px solid'
        borderColor='gray.600'
        marginX='auto'
        marginY='12'
      />

      <Flex justify='auto'>
        <Text
          as='h1'
          fontWeight='500'
          fontSize='2xl'
          lineHeight='45px'
          marginX='auto'
          textAlign='center'
        >
          Vamos Nessa? <br /> Então Escolha seu continente
        </Text>
      </Flex>

      <Flex
        position='relative'
        w='100%'
        maxWidth={1200}
        h={450}
        justify='center'
        mt='10'
        mb='10'
      >
        <ContinentsSwiper />
      </Flex>
    </Flex>
  )
}

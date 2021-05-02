import { Flex, SimpleGrid } from '@chakra-ui/react'
import { TypeItem } from './TypeItem'

export function TravelTypes() {
  return (
    <Flex
      w='100%'
      maxWidth={1200}
      mx='auto'
      mt='16'
      px='6'
      align='center'
      justify='space-between'
    >
      <TypeItem icon='/images/cocktail.svg' title='vida noturna' />
      <TypeItem icon='/images/surf.svg' title='praia' />
      <TypeItem icon='/images/building.svg' title='moderno' />
      <TypeItem icon='/images/museum.svg' title='clássico' />
      <TypeItem icon='/images/globe.svg' title='e mais...' />
    </Flex>
  )
}

import { Flex, Image, Text } from '@chakra-ui/react'

interface CarouselItemProps {
  image: string
  title: string
  description: string
}

export function CarouselItem({ image, title, description }: CarouselItemProps) {
  return (
    <Flex
      w='100%'
      h='100%'
      flexDirection='column'
      justify='center'
      align='center'
    >
      <Image src={image} position='absolute' zIndex='-1' />
      <Text color='white' fontWeight='700' lineHeight='72px' fontSize='2xl'>
        {title}
      </Text>
      <Text color='white' fontWeight='700' fontSize='lg'>
        {description}
      </Text>
    </Flex>
  )
}

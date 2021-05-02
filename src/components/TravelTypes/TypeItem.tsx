import { Flex, Icon, Img, Stack, Text } from '@chakra-ui/react'

interface TypeItemProps {
  icon: string
  title: string
}

export function TypeItem({ icon, title }: TypeItemProps) {
  return (
    <Flex
      w='170px'
      h='150px'
      flexDirection='column'
      justify='center'
      align='center'
    >
      <Stack spacing='4' align='center'>
        <Img src={icon} boxSize='85px' />
        <Text>{title}</Text>
      </Stack>
    </Flex>
  )
}

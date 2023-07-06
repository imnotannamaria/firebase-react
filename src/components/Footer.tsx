import { Box, Container, Stack, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      bg={'gray.400'}
      color={'gray.700'}
      as="footer"
      mt="auto"
      py={4}
      textAlign="center"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© Todos os direitos reservados</Text>
      </Container>
    </Box>
  )
}

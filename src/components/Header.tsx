import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { SignOut } from '@phosphor-icons/react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()
  const toast = useToast()

  function handleLogout() {
    signOut(auth)
      .then(() => {
        toast({
          title: 'logout efetuado com sucesso!',
          description: 'Aguarde uns segundos e você será redirecionado.',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })

        navigate('/login')
      })
      .catch((error) => {
        console.log('Erro ao fazer logout:', error)

        toast({
          title: 'Ocorreu um erro ao fazer logout.',
          description: 'Tente novamente mais tarde.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            justifyContent="center"
            alignItems="center"
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading size="lg">Logo</Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link to="/">Dashboard</Link>
              <Link to="/register">Cadastro</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'red'}
              mr={4}
              leftIcon={<SignOut size={20} />}
              onClick={handleLogout}
            >
              Sair
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/">Dashboard</Link>
              <Link to="/register">Cadastro</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

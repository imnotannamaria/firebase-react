import { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const toast = useToast()
  const navigate = useNavigate()

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)

        toast({
          title: 'Login efetuado com sucesso!',
          description: 'Aguarde uns segundos e você será redirecionado.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        setError(errorMessage)

        console.log(errorCode)
        console.log(errorMessage)

        toast({
          title: 'Ocorreu um erro ao fazer login.',
          description: 'Tente novamente mais tarde.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.400'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Faça Login</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Site para testar funcionalidades do firebase
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Link color={'blue.400'}>Esqueçeu a senha?</Link>
                <Text>{error}</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

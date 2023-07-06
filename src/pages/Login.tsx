import { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
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
    <Box p={4} justifyContent="center">
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Text color="red" pt={2}>
          {error}
        </Text>

        <Button mt={4} colorScheme="teal" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  )
}

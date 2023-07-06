import { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { auth } from '../lib/firebase'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        setError(errorMessage)

        console.log(errorCode)
        console.log(errorMessage)
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
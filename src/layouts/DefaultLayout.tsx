import { signOut } from 'firebase/auth'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'
import { Button, VStack, useToast } from '@chakra-ui/react'

export function DefaultLayout() {
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
    <div>
      <VStack>
        <strong>Header</strong>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/register">Cadastro</Link>
            </li>
          </ul>
        </nav>
        <Button onClick={handleLogout} colorScheme="red">
          Deslogar
        </Button>
      </VStack>
      <hr />

      <Outlet />

      <hr />
      <footer>
        <strong>Footer</strong>
      </footer>
    </div>
  )
}

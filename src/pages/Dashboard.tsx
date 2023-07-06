import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'
import { Button, useToast } from '@chakra-ui/react'

export function Dashboard() {
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
          <li>
            <Button onClick={handleLogout} colorScheme="red">
              Deslogar
            </Button>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

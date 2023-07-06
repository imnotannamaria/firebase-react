import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'

export function DefaultLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />

      <Box padding="2rem" flex="1">
        <Outlet />
      </Box>

      <Footer />
    </Box>
  )
}

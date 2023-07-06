import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Página de não encontrado</h1>} />
      </Route>
    </Routes>
  )
}

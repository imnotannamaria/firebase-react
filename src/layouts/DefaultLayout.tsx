import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <Outlet />

      <hr />
      <footer>
        <strong>Footer</strong>
      </footer>
    </div>
  )
}

import { onAuthStateChanged } from 'firebase/auth'
import { Router } from './routes/Route'
import { auth } from './lib/firebase'
import { useEffect, useState } from 'react'
import { Login } from './pages/Login'

interface User {
  uid: string
}

export function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo)
    })

    return subscriber
  }, [])

  return <div>{user ? <Router /> : <Login />}</div>
}

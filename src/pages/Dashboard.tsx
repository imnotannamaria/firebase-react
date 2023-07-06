import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

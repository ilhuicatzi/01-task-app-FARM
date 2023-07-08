import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center py-5 mb-10">
        <Link to="/" className="text-2xl font-semibold"> Task App </Link>
        <Link to="/tasks/new" className="bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-500"> Create Task </Link>
      </nav>
    </header>
  )
}

export default Navbar
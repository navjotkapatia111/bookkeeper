import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/themecontext'

const Navbar = () => {

  const {darkMode, toggleTheme} = useTheme()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('userAuth')
    navigate('/login')
  }
  return (
    <nav className={`w-full shadow px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`} >
    <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold cursor-pointer">
        LOGO
      </h1>

      <ul className="flex gap-8 font-medium">
        <li><Link to='/' className="cursor-pointer hover:text-orange-500 transition">Home</Link></li>       
        <li><Link to='/about' className="cursor-pointer hover:text-orange-500 transition">About</Link></li>
        <li><Link to='/contact' className="cursor-pointer hover:text-orange-500 transition">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-xl hover:scale-110 transition cursor-pointer">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button onClick={handleLogout}
          className="px-4 py-1.5 bg-orange-500 text-white rounded hover:bg-orange-600 transition cursor-pointer">
          Logout
        </button>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
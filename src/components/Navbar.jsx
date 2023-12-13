import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const isLogged = false
  return (
    <nav className="bg-gray-800 p-2 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-semibold">
                    <Link to="/">
                        Furmap
                    </Link>
                </div>

                <div className="hidden md:flex ml-2">
                    <Link to="/users" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Users</Link>
                    <Link to="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
                </div>

                <div className="flex items-center ml-auto">
                    {isLogged ? (
                        <div>
                            <Link to={"/users/username"} className="bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-slate-600">My Profile</Link>
                        </div>
                    ): (
                        <div >
                            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600">Register</Link>
                            <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
  )
}

export default Navbar
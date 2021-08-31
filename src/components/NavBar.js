import React from 'react'
import { NavLink } from "react-router-dom"
// import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex items-center">
          <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest" activeClassName="text-white">
            href.id
          </NavLink>
          <NavLink to="/post" className="inflex-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
            Blog Posts
          </NavLink>
          <NavLink to="/project" className="inflex-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
            Projects
          </NavLink>
          <NavLink to="/about" className="inflex-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"activeClassName="text-red-100 bg-red-700">
            About Me
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default NavBar

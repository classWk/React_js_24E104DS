import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
   const[open, setOpen] = useState(false)
   const user = true
  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'>
                <img src="/public/logo.png" alt="" />
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className="right">
            {user?(
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                    <span>MINE</span>
                    <Link to="/profile" className='profile'>
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>
            ):(
                <>
                <a href="/">Sign in</a>
            <a href="/" className='register'>Sign up</a>
                </>
            )}
            <div className="menuIcon">
                <img src="/public/menu.png" alt="" 
                onClick={()=>setOpen((prev)=>!(prev))}
                />
            </div>
            <div className={open?"menu active":"menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign in</a>
                <a href="/">Sign up</a>
            </div>
        </div>
    </nav>
  )
}
export default Navbar
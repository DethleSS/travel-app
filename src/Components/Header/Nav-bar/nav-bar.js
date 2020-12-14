import React from 'react'
import './nav-bar.css'

const NavBar = () => {
    return (
        <nav className="nav__links">
            <a className="nav__links_item_home" href="/">Home</a>
            <a className="nav__links_item"href="/destinations">Destinations</a>
            <a className="nav__links_item"href="/about">About</a>
            <a className="nav__links_item"href="/partner">Partner</a>
            <button className="nav__links_btn_login">Login</button>
            <button className="nav__links_btn_register">Register</button>
        </nav>
    )
}

export default NavBar
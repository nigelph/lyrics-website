import React from 'react'
import navStyle from './navbar.module.css'

export default function Navbar() {
    return (
        <div id={navStyle['nav-container']}>

            <ul className={navStyle['nav-list']}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Two</a>
                <a href="#">Three</a>
                <a href="#">Four</a>
            </ul>
        </div>
    )
}

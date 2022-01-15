import React from 'react'
import footerStyle from './footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyle['footer-container']}>
            <div className={footerStyle['footer-content-container']}>
                <div>
                    <p>@Copyright Nigel Phan 2022</p>
                </div>
            </div>
        </footer>
    )
}

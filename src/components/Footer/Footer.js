import React from 'react'
import footerStyle from './footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyle['footer-container']}>
            <div className={footerStyle['footer-content-container']}>
                <div>
                    <h3>Contact Us</h3>

                    <a href="https://google.com">
                        <p>one</p>
                    </a>
                    <a href="#">
                        <p>one</p>
                    </a>
                </div>
                <div>
                    <h3>More Information</h3>
                    <a href="#">
                        <p>Shipping Information</p>
                    </a>  <a href="#">
                        <p>Return and Refund Policy</p>
                    </a>
                </div>
                <div>
                    <h3>About Us</h3>
                    <a href="#">
                        <p>one</p>
                    </a>  <a href="#">
                        <p>one</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

import React from 'react'
import'./footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>ZAVERI</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className='footer_end'>
                <small>You've Reached The End!</small>

            </div>

        </footer>
    )
}

export default Footer
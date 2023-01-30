import React from 'react'
import'./header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h3>WELCOME</h3>
                <h1>I Am Ammarah Zaveri</h1>
                <h5 className="text-light"> A Fullstack Developer in the making</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
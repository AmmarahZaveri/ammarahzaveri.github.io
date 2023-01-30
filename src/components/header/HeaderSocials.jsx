import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import'./header.css' 


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/ammarah-zaveri-ba3523253/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/AmmarahZaveri" target="_blank"><FaGithub/></a>

        </div>
    )
}

export default HeaderSocials
import React from 'react'
import CV from'../../assests/Zaveri.pdf'
import'./header.css' 

const CTA = () => {
    return (
        <div className ='cta'>
            <a href= {CV} download className='btn'>Download MEEEE</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>

        </div>
        

        
    )
}

export default CTA
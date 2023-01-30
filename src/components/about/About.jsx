import React from 'react'
import'./about.css'
import ME from '../../assests/me-about.png'
import {FaHtml5} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {AiOutlineConsoleSql} from 'react-icons/ai'




const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
            <h2>My Skills</h2>
            
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>

                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaHtml5 className='about_icon'/>
                            <h5>HTML</h5>
                        </article>

                        <article className='about_card'>
                            <TbBrandJavascript className='about_icon'/>
                            <h5>JavaScript</h5>
                    
                        </article>

                        <article className='about_card'>
                            <DiCss3 className='about_icon'/>
                            <h5>CSS</h5>
                    
                        </article>

                        <article className='about_card'>
                            <FaReact className='about_icon'/>
                            <h5>React</h5>
                    
                        </article>

                        <article className='about_card'>
                            <FaNodeJs className='about_icon'/>
                            <h5>NodeJs</h5>
                    
                        </article>

                        <article className='about_card'>
                            <AiOutlineConsoleSql className='about_icon'/>
                            <h5>SQL</h5>
                    
                        </article>
                    </div>
                    <p>
                        Welcome all. My name is Ammarah Zaveri and this is my website!
                        Feel free to look around and reach out as well. My interest in 
                        computer science came from a small python class I took as a kid. 
                        Now I've dabbled in quite a few languages and created a couple projects. 
                        Some interesting things about me is that I'm hoping to become a full stack 
                        developer, I'm aiming for a Bachelors in Computer Science, and I'm learning React 
                        as of the moment. I have a few projects that I've done down below and 
                        I'll keep adding to it in the near future. You can email me or find me 
                        on Linkedin as well. 
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About 
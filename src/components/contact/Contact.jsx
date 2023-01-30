import React from 'react'
import'./contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail =(e) => {
        e.preventDefault();
        emailjs.sendForm('service_q4gwdx2', 'template_ubfo6bj', form.current, 'Q2m4bhGKgk9rV_Vjz')
        e.target.reset()
    }
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>ammarahzaveri@gmail.com</h5>
                        <a href="mailto:ammarahzaveri@gmail.com" target="_blank">Send a message</a>

                    </article>
                    <article className="contact_option">
                        <BsLinkedin className='contact_option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Ammarah Zaveri</h5>
                        <a href="https://www.linkedin.com/in/ammarah-zaveri-ba3523253/" target="_blank">Send a message</a>

                    </article>
                    <article className="contact_option">
                        <FaGithub className='contact_option-icon'/>
                        <h4>GitHub</h4>
                        <h5>Ammarah Zaveri</h5>
                        <a href="https://github.com/AmmarahZaveri" target="_blank">View my profile</a>

                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit ={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact 
import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_e1ejwvk','template_bh8vo5a',form.current,'jV52X1qLlaVvJOxyb')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact_option'>
            <AiOutlineMail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:lia.ciobanu147@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact__option-icons'/>
            <h4>Messenger</h4>
            <h5>egatorturials</h5>
            <a href="https://m.me/lia.cibanu/" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact__option-icons' />
            <h4>WhatsApp</h4>
            <h5>+123 456 77</h5>
            <a href="https://wa.me/+40749660983" target="_blank">Contact me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required  />  
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
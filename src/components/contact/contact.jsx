import "./contact.css"
import React from 'react' 
import {RiMessengerLine} from "react-icons/ri"
import {MdOutlineEmail} from "react-icons/md"   
import {BsWhatsapp} from "react-icons/bs"  
import { useRef } from 'react'; 
import emailjs from "emailjs-com" 


export const Contact = ()=> { 

    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nxlb26c', 'template_c8xyw1w', form.current, 'C_zzCKTMDoBITRzMC')
          .then((result) => {
              console.log(result.text); 
              alert("message send ")
          }, (error) => {
              console.log(error.text); 
              alert("something went wrong")
          });
          e.target.reset(); 
      };

  return (
    <section id="contact">
        <h5> Get In Touch </h5> 
        <h2> Contact Me </h2> 

        <div className="container contact_container"> 
            <div className="contact_options">
                <article className="contact_option"> 
                    <MdOutlineEmail className="contact_option-icon"/>
                    <h4> Email </h4>   
                    <h5> tushitsaxena4@gmail </h5>      
                    <a href="mailto:tushitsaxena4@gmail.com" target="_blank"> Send a message </a>
                </article>
                <article className="contact_option"> 
                    <RiMessengerLine className="contact_option-icon" />
                    <h4> Facebook </h4>   
                    <h5> Messenger </h5>      
                    <a href="https://m.me/tushit.saxena" target="_blank"> Send a message </a>
                </article>
                <article className="contact_option"> 
                    <BsWhatsapp className="contact_option-icon" />
                    <h4> WhatsApp </h4>  
                    <a href="https://api.whatsapp.com/send?phone=+916397310463" target="_blank"> Send a message </a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>  
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required ></textarea> 
                <button type="submit" className="btn btn-primary" > Send Message </button> 
                    {/* ==> npm install emailjs-com --save */}
            </form>
        </div> 
    </section>
  )
}



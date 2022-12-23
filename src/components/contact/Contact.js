import {React, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import './Contact.css'

export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bpng7e7', 'template_y2xffsh', form.current, 'k5sgg72-uloGuXB_E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div className="contact">
            <div className="contact_left">
                <h2 className="contact_header">დაგვიტოვე საკონტაქტო</h2>

                <p className="contact_paragraph">
                    ჩვენი წარმომადგენელი დაგეხმარებათ შეარჩიოთ თქვენზე მორგებული ბინა
                </p>

            </div>

            <div className="contact_right">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name_and_number">
                    <input type="text" name="user_name" placeholder="სახელი"/>
                    <input type="text" name="user_number" placeholder="ნომერი"/>
                </div>

                <div className="email_input_div">
                    <input className="email" type="email" name="user_email"  placeholder="ელ.ფოსტა"/>
                </div>
                
                <div className="submit_btn">
                    <button type="submit">
                        <span>გაგზავნა</span>
                    </button>
                </div>
            
            </form>
            </div>
        </div>
    )
}
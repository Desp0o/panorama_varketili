import {React, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import './Contact.css'

export default function Contact(props){
    const form = useRef();
    const contactHeaderRef = useRef()
    const contactParagraphRef = useRef()
    const inputNameRef = useRef()
    const inputNumberRef = useRef()
    const inputMailRef = useRef()
    const inputSendref = useRef()

    useEffect(()=>{
        contactHeaderRef.current.innerHTML = 'დაგვიტოვე საკონტაქტო'
        contactParagraphRef.current.innerHTML = 'ჩვენი წარმომადგენელი დაგეხმარებათ შეარჩიოთ თქვენზე მორგებული ბინა'
        inputNameRef.current.placeholder = 'სახელი'
        inputNumberRef.current.placeholder = 'ნომერი'
        inputMailRef.current.placeholder = 'ელ.ფოსტა'
        inputSendref.current.innerHTML = 'გაგზავნა'

        if(localStorage.language === 'eng'){
            contactHeaderRef.current.innerHTML = 'Leave your Contact Info'
            contactParagraphRef.current.innerHTML = 'Find the perfect apartment with the help of our expert representatives.'
            inputNameRef.current.placeholder = 'Name'
            inputNumberRef.current.placeholder = 'Number'
            inputMailRef.current.placeholder = 'Email'
            inputSendref.current.innerHTML = 'Send'
        }else if(localStorage.language === 'rus'){
            contactHeaderRef.current.innerHTML = ''
            contactParagraphRef.current.innerHTML = ''
            inputNameRef.current.placeholder = ''
            inputNumberRef.current.placeholder = ''
            inputMailRef.current.placeholder = ''
            inputSendref.current.innerHTML = ''
        }

    },[props.iseng, props.isrus, props.isgeo])

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
                <h2 className="contact_header" ref={contactHeaderRef}>დაგვიტოვე საკონტაქტო</h2>

                <p className="contact_paragraph" ref={contactParagraphRef}>
                    ჩვენი წარმომადგენელი დაგეხმარებათ შეარჩიოთ თქვენზე მორგებული ბინა
                </p>

            </div>

            <div className="contact_right">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name_and_number">
                    <input ref={inputNameRef} type="text" name="user_name" placeholder="სახელი"/>
                    <input ref={inputNumberRef} type="text" name="user_number" placeholder="ნომერი"/>
                </div>

                <div className="email_input_div">
                    <input ref={inputMailRef} className="email" type="email" name="user_email"  placeholder="ელ.ფოსტა"/>
                </div>
                
                <div className="submit_btn">
                    <button type="submit">
                        <span ref={inputSendref}>გაგზავნა</span>
                    </button>
                </div>
            
            </form>
            </div>
        </div>
    )
}
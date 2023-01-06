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
        contactParagraphRef.current.innerHTML = 'ჩვენი წარმომადგენელი დაგეხმარებათ<br/> შეარჩიოთ  თქვენზე მორგებული ბინა'
        
        inputSendref.current.innerHTML = 'გაგზავნა'

        if(localStorage.language === 'eng'){
            contactHeaderRef.current.innerHTML = 'Leave your Contact Info'
            contactParagraphRef.current.innerHTML = 'Find the perfect apartment <br/> with the help of our expert representatives.'
            
            inputSendref.current.innerHTML = 'Send'
        }else if(localStorage.language === 'rus'){
            contactHeaderRef.current.innerHTML = ''
            contactParagraphRef.current.innerHTML = ''
            
            inputSendref.current.innerHTML = ''
        }

    },[props.iseng, props.isrus, props.isgeo])

    const sendEmail = (e) => {
        if(numberBoolean === true && nameBoolean === true && mailBoolean === true){
            e.preventDefault();
    
            emailjs.sendForm('service_j7zw3pp', 'template_7suk37t', form.current, 'lf3j-nerT-hfKW-Fi')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
        }

        if(numberBoolean === false){
            e.preventDefault();
            numberInputErrorMsg.current.style.display = 'block'
            inputNumberRef.current.style.border = "2px solid #DD1A1A"
            inputNumberRef.current.style.backgroundColor = ''
        }

        if(nameBoolean === false){
            e.preventDefault();
            inputNameRef.current.style.border = "2px solid #DD1A1A"
            inputNameRef.current.style.backgroundColor = ''
        }

        if(mailBoolean === false){
            e.preventDefault();
            inputMailRef.current.style.border = "2px solid #DD1A1A"
            inputMailRef.current.style.backgroundColor = ''
        }
        
        console.log(mailBoolean + ' meili ref');
        e.preventDefault();
        
      };


    // ///////////////////
    // ნომრის ინპუტის პარამეტრები
    // //////////////////
    const numberInputErrorMsg = useRef()
    const [numberBoolean, setNumberBoolean] = useState(false)
    const [inputNumber, setInputNumber] = useState('')

    const numberHandler = event => {
        setInputNumber(event.target.value)
    }

    useEffect(()=>{
        if(inputNumber.length >= 9 && !inputNumber.includes('a')){
            setNumberBoolean(true)
            numberInputErrorMsg.current.style.display = 'none'
            inputNumberRef.current.style.border = ""
            
        }else if(inputNumber.length === 0){
            inputNumberRef.current.style.border = ""
            numberInputErrorMsg.current.style.display = 'none'
            setNumberBoolean(false)
        }else{
            setNumberBoolean(false)
        }

        return
    },[inputNumber,numberBoolean])

    // ///////////////////
    // სახელის ინპუტის პარამეტრები
    // //////////////////
    const [inputName, setInputName] = useState('')
    const [nameBoolean, setnameBoolean] = useState(false)

    const nameHandler = event => {
        setInputName(event.target.value)
    }

    useEffect(()=>{
        if(inputName.length > 0){
            setnameBoolean(true)
            inputNameRef.current.style.border = ""
        }else{
            setnameBoolean(false)
        }

        return
    },[inputName,nameBoolean])

    // ///////////////////
    //  ინპუტის პარამეტრები
    // //////////////////
    const [inputMail, setInputMail] = useState('')
    const [mailBoolean, setMailBoolean] = useState(false)

    const mailHandler = event => {
        setInputMail(event.target.value)
    }

    useEffect(()=>{
        if(inputMail.length > 0){
            setMailBoolean(true)
            inputMailRef.current.style.border = ""
        }else{
            setMailBoolean(false)
        }

        return
    },[inputMail,mailBoolean])







    return(
        <div className="contact">
            <div className="contact_left">
                <h2 className="contact_header" ref={contactHeaderRef}>დაგვიტოვე საკონტაქტო</h2>

                <p className="contact_paragraph" ref={contactParagraphRef}>
                    ჩვენი წარმომადგენელი დაგეხმარებათ   შეარჩიოთ  თქვენზე მორგებული ბინა
                </p>

            </div>

            <div className="contact_right">
                <form ref={form} onSubmit={sendEmail}>

                    <div className="input_fields">

                        <div className="input_fields_top">

                            <div className="input1_label1">
                                <span className="placeholder_name">სახელი *</span>
                                <input ref={inputNameRef} type="text" name="user_name" onChange={nameHandler}/>
                            </div>

                            <div className="input2_label2">
                                <span className="placeholder_number">ნომერი *</span>
                                <input ref={inputNumberRef} type="text" name="user_number" onChange={numberHandler}/>
                                <span ref={numberInputErrorMsg} className="placeholder_number_error">მიუთითეთ ნომრის სწორი ფორმატი</span>
                            </div>
                            
                            
                        </div>

                        <div className="input_fields_bottom">
                            <span className="placeholder_email">ელ-ფოსტა *</span>
                            <input ref={inputMailRef} className="email" type="text" name="user_email" onChange={mailHandler}/>
                        </div>


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
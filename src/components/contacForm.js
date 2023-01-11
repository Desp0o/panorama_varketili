import {React, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import '../styles/contactForm.css'

import errorIcon from '../images/errorIcon.png'


export default function Form(props){

    const form = useRef();
    const inputNameRef = useRef()
    const inputNumberRef = useRef()
    const inputMailRef = useRef()
    const inputSendref = useRef()

    const comtactFormHeaderRef = useRef()
    const comtactFormNameRef = useRef()
    const contactFormNumberRef = useRef()
    const contactFormEmailRef = useRef()


            

    useEffect(()=>{

        comtactFormHeaderRef.current.innerHTML = 'დაგვიტოვე საკონტაქტო'
        comtactFormNameRef.current.innerHTML = 'სახელი *'
        contactFormNumberRef.current.innerHTML = 'ნომერი *'
        contactFormEmailRef.current.innerHTML = 'ელ-ფოსტა *'
        inputSendref.current.innerHTML = 'გაგზავნა'

        numberInputErrorMsg.current.innerHTML = 'მიუთითეთ ნომრის სწორი ფორმატი'
        emailInputErrorMsg.current.innerHTML = 'მიუთითეთ ელ-ფოსტის სწორი ფორმატი'
        
        
    if(localStorage.language === 'eng'){

        comtactFormHeaderRef.current.innerHTML = 'Leave your Contact Info'
        comtactFormNameRef.current.innerHTML = 'Name *'
        contactFormNumberRef.current.innerHTML = 'Number *'
        contactFormEmailRef.current.innerHTML = 'Email  *'
        inputSendref.current.innerHTML = 'Send'

        numberInputErrorMsg.current.innerHTML = 'Please enter the correct email format'
        emailInputErrorMsg.current.innerHTML = 'Please enter the correct number format'
        
        
    }else if(localStorage.language === 'rus'){
        comtactFormHeaderRef.current.innerHTML = 'Оставьте свою контактную информацию'
        comtactFormNameRef.current.innerHTML = 'имя *'
        contactFormNumberRef.current.innerHTML = 'номер *'
        contactFormEmailRef.current.innerHTML = 'Эл. адрес *'
        inputSendref.current.innerHTML = 'Отправить'

        numberInputErrorMsg.current.innerHTML = 'Пожалуйста, введите правильный формат электронной почты'
        emailInputErrorMsg.current.innerHTML = 'Пожалуйста, введите правильный номер'
        
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
              setInputMail('')
              setInputNumber('')
              setInputName('')
        }

        if(numberBoolean === false){
            e.preventDefault();
            numberInputErrorMsg.current.style.display = 'block'
            numberErrorIconRef.current.style.display = 'block'
            inputNumberRef.current.style.border = "2px solid #DD1A1A"
            inputNumberRef.current.style.backgroundColor = 'white'
        }

        if(nameBoolean === false){
            e.preventDefault();
            inputNameRef.current.style.backgroundColor = ''
            inputNameRef.current.style.backgroundColor = 'white'
        }

        if(mailBoolean === false){
            e.preventDefault();
            inputMailRef.current.style.border = "2px solid #DD1A1A"
            inputMailRef.current.style.backgroundColor = ''
            inputMailRef.current.style.backgroundColor = 'white'
            emailInputErrorMsg.current.style.display = 'block'
            mailErrorIconRef.current.style.display = 'block'
        }
        
        e.preventDefault();
        
      };


    // ///////////////////
    // ნომრის ინპუტის პარამეტრები
    // //////////////////
    const numberInputErrorMsg = useRef()
    const numberErrorIconRef = useRef()
    const [numberBoolean, setNumberBoolean] = useState(false)
    const [inputNumber, setInputNumber] = useState('')

    const numberHandler = event => {
        setInputNumber(event.target.value)
    }

    useEffect(()=>{
        const regex = /^[0-9+]+$/;
        if(inputNumber.length >= 9 && regex.test(inputNumber)){
            setNumberBoolean(true)
            numberInputErrorMsg.current.style.display = 'none'
            numberErrorIconRef.current.style.display = 'none'
            inputNumberRef.current.style.border = ""
            inputNumberRef.current.style.backgroundColor = ''
            
        }else if(inputNumber.length === 0){
            inputNumberRef.current.style.border = ""
            numberErrorIconRef.current.style.display = 'none'
            numberInputErrorMsg.current.style.display = 'none'
            inputNumberRef.current.style.backgroundColor = ''
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
            inputNameRef.current.style.backgroundColor = ''
        }else{
            setnameBoolean(false)
        }

        return
    },[inputName,nameBoolean])

    // ///////////////////
    // მეილის ინპუტის პარამეტრები
    // //////////////////
    const emailInputErrorMsg = useRef()
    const mailErrorIconRef = useRef()
    const [inputMail, setInputMail] = useState('')
    const [mailBoolean, setMailBoolean] = useState(false)

    const mailHandler = event => {
        setInputMail(event.target.value)
    }

    useEffect(()=>{
        const mailCheck = /[@]/ ;
        if(inputMail.length > 6 && mailCheck.test(inputMail)){
            setMailBoolean(true)
            inputMailRef.current.style.border = ""
            emailInputErrorMsg.current.style.display = 'none'
            mailErrorIconRef.current.style.display = 'none'
            inputMailRef.current.style.backgroundColor = ''
        }else if(inputMail.length === 0){
            inputMailRef.current.style.border = ""
            emailInputErrorMsg.current.style.display = 'none'
            mailErrorIconRef.current.style.display = 'none'
            inputMailRef.current.style.backgroundColor = ''
            setMailBoolean(false)
        }else{
            setMailBoolean(false)
        }

        return
    },[inputMail,mailBoolean])

    return(
        <>

        <p className="leave_contact" ref={comtactFormHeaderRef} style={props.styleeng}>დაგვიტოვე საკონტაქტო</p>

        <form ref={form} onSubmit={sendEmail}>

                    <div className="input_fields">

                        <div className="input_fields_top">

                            <div className="input1_label1">
                                
                                <span className="placeholder_name" ref={comtactFormNameRef} style={props.styleeng}>სახელი *</span>
                                <input ref={inputNameRef} className='upper_input' type="text" name="user_name" onChange={nameHandler}/>
                            </div>

                            <div className="input2_label2">
                                <img ref={numberErrorIconRef} className="error_icon" src={errorIcon} alt='errorIcon'/>
                                <span className="placeholder_number" ref={contactFormNumberRef} style={props.styleeng}>ნომერი *</span>
                                <input ref={inputNumberRef} className='upper_input' type="text" name="user_number" onChange={numberHandler}/>
                                <span ref={numberInputErrorMsg} className="placeholder_number_error" style={props.styleeng}>მიუთითეთ ნომრის სწორი ფორმატი</span>
                            </div>
                            
                            
                        </div>

                        <div className="input_fields_bottom">
                            <img ref={mailErrorIconRef} className="error_icon" src={errorIcon} alt='errorIcon'/>
                            <span className="placeholder_email" ref={contactFormEmailRef} style={props.styleeng}>ელ-ფოსტა *</span>
                            <input ref={inputMailRef} className='email_for_form'  type="text" name="user_email" onChange={mailHandler}/>
                            <span ref={emailInputErrorMsg} className="placeholder_email_error" style={props.styleeng}>მიუთითეთ ელ-ფოსტის სწორი ფორმატი</span>
                        </div>


                    </div>

                    
                    
                        <button className="contact_form_btn" type="submit">
                            <span ref={inputSendref} style={props.styleeng}>გაგზავნა</span>
                        </button>
                    
                
                </form>
        </>
    )
}
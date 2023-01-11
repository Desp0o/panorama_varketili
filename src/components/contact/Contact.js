import {React, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import './Contact.css'

import errorIcon from '../../images/errorIcon.png'

export default function Contact(props){
    const form = useRef();
    const contactHeaderRef = useRef()
    const contactParagraphRef = useRef()
    const inputNameRef = useRef()
    const inputNumberRef = useRef()
    const inputMailRef = useRef()
    const inputSendref = useRef()
    const namePlaceHolderRef = useRef()
    const numberPlaceHolderRef = useRef()
    const emailPlaceHolderRef = useRef()

    useEffect(()=>{
        contactHeaderRef.current.innerHTML = 'დაგვიტოვე საკონტაქტო'
        contactHeaderRef.current.classList.remove('rusFontDecrease')
        contactHeaderRef.current.style.fontSize = ''

        contactParagraphRef.current.innerHTML = 'ჩვენი წარმომადგენელი დაგეხმარებათ<br/> შეარჩიოთ  თქვენზე მორგებული ბინა'
        inputSendref.current.innerHTML = 'გაგზავნა'

        //კონტაქტის ფორმა
        namePlaceHolderRef.current.innerHTML = 'სახელი *'
        numberPlaceHolderRef.current.innerHTML = "ნომერი *"
        emailPlaceHolderRef.current.innerHTML = "ელ-ფოსტა *"

        numberInputErrorMsg.current.innerHTML = 'მიუთითეთ ნომრის სწორი ფორმატი'
        numberInputErrorMsg.current.classList.remove('placeholder_number_error_rus')
        emailInputErrorMsg.current.innerHTML = 'მიუთითეთ ელ-ფოსტის სწორი ფორმატი'

        if(localStorage.language === 'eng'){
            contactHeaderRef.current.innerHTML = 'Leave your Contact Info'
            contactHeaderRef.current.classList.remove('rusFontDecrease')
            contactHeaderRef.current.style.fontSize = ''
            contactParagraphRef.current.innerHTML = 'Find the perfect apartment <br/> with the help of our expert representatives.'
            inputSendref.current.innerHTML = 'Send'

            //კონტაქტის ფორმა
            namePlaceHolderRef.current.innerHTML = 'Name *'
            numberPlaceHolderRef.current.innerHTML = "Number *"
            emailPlaceHolderRef.current.innerHTML = "Email *"

            numberInputErrorMsg.current.innerHTML = 'Please enter the correct email format'
            numberInputErrorMsg.current.classList.remove('placeholder_number_error_rus')
            emailInputErrorMsg.current.innerHTML = 'Please enter the correct number format'

        }else if(localStorage.language === 'rus'){
            contactHeaderRef.current.innerHTML = 'Оставьте свою контактную информацию'
            contactHeaderRef.current.classList.add('rusFontDecrease')
            contactHeaderRef.current.style.fontSize = '29px'
            contactParagraphRef.current.innerHTML = 'Найдите идеальную квартиру с помощью наших представителей-экспертов.'
            inputSendref.current.innerHTML = 'Отправить'

            //კონტაქტის ფორმა
            namePlaceHolderRef.current.innerHTML = 'имя *' 
            numberPlaceHolderRef.current.innerHTML = "номер *"
            emailPlaceHolderRef.current.innerHTML = "Эл. адрес *"

            numberInputErrorMsg.current.innerHTML = 'Пожалуйста, введите правильный формат электронной почты'
            numberInputErrorMsg.current.classList.add('placeholder_number_error_rus')
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
        <div className="contact">
            <div className="contact_left">
                <h2 className="contact_header" ref={contactHeaderRef} style={props.styleeng}>დაგვიტოვე საკონტაქტო</h2>

                <p className="contact_paragraph" ref={contactParagraphRef} style={props.styleeng}>
                    ჩვენი წარმომადგენელი დაგეხმარებათ   შეარჩიოთ  თქვენზე მორგებული ბინა
                </p>

            </div>

            <div className="contact_right">
                <form ref={form} onSubmit={sendEmail}>

                    <div className="input_fields">

                        <div className="input_fields_top">

                            <div className="input1_label1">
                                
                                <span ref={namePlaceHolderRef} className="placeholder_name" style={props.styleeng}>სახელი *</span>
                                <input ref={inputNameRef} type="text" name="user_name" onChange={nameHandler}/>
                            </div>

                            <div className="input2_label2">
                                <img ref={numberErrorIconRef} className="error_icon" src={errorIcon} alt='errorIcon'/>
                                <span ref={numberPlaceHolderRef} className="placeholder_number" style={props.styleeng}>ნომერი *</span>
                                <input ref={inputNumberRef} type="text" name="user_number" onChange={numberHandler}/>
                                <span ref={numberInputErrorMsg} className="placeholder_number_error" style={props.styleeng}>მიუთითეთ ნომრის სწორი ფორმატი</span>
                            </div>
                            
                            
                        </div>

                        <div className="input_fields_bottom">
                            <img ref={mailErrorIconRef} className="error_icon" src={errorIcon} alt='errorIcon'/>
                            <span ref={emailPlaceHolderRef} className="placeholder_email" style={props.styleeng}>ელ-ფოსტა *</span>
                            <input ref={inputMailRef}  type="text" name="user_email" onChange={mailHandler}/>
                            <span ref={emailInputErrorMsg} className="placeholder_email_error" style={props.styleeng}>მიუთითეთ ელ-ფოსტის სწორი ფორმატი</span>
                        </div>


                    </div>

                    
                    <div className="submit_btn">
                        <button type="submit">
                            <span ref={inputSendref} style={props.styleeng}>გაგზავნა</span>
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}
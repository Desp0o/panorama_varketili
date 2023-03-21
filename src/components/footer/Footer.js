import {React, useEffect, useState, useRef, useContext} from "react";
import './Footer.css'

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import { LangContext } from "../langContext";


export default function Footer(props){

const {isEng} = useContext(LangContext)
const {isGeo} = useContext(LangContext)
const {isRus} = useContext(LangContext)

const geoRuningText = useRef()
const engRuningText = useRef()
const rusRuningText = useRef()
const footerAdressRef = useRef()

const calculateTimeLeft = () => {
    const difference = +new Date("2023-12-28T00:00:00+04:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
    };

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
    setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
    }, 1000);
});

if(timeLeft.days<10){
    timeLeft.days='0'+timeLeft.days
}

useEffect(()=>{

geoRuningText.current.style.display = "flex"
engRuningText.current.style.display = "none"
rusRuningText.current.style.display = "none"

footerAdressRef.current.innerText = 'თბილისი, ვიქტორ კუპრაძის 68'


if(localStorage.language === 'eng'){
    geoRuningText.current.style.display = "none"
    engRuningText.current.style.display = "flex"
    rusRuningText.current.style.display = "none"
    
    footerAdressRef.current.innerText = 'Tbilisi, Victor Kupradze st. 68'

}else if(localStorage.language === 'rus'){
    geoRuningText.current.style.display = "none"
    engRuningText.current.style.display = "none"
    rusRuningText.current.style.display = "flex"

    footerAdressRef.current.innerText = 'Тбилиси, ул. Виктора Купрадзе. 68'
}

},[isEng, isGeo, isRus])

    return(
        
        <div className="footer">

            <div className="running_text_outter">
                <div ref={geoRuningText}>
                    <div className="running_text">
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                        <h1>დარჩენილია 54 ბინა და {timeLeft.days} დღე დასრულებამდე.</h1>
                    </div>
                </div>

                <div ref={engRuningText}>
                    <div className="running_text">
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                        <h1 style={props.styleeng}><span>55 apartments and {timeLeft.days} </span>days remaining until completion.</h1>
                    </div>
                </div>

                <div ref={rusRuningText}>
                    <div className="running_text">
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                        <h1 style={props.styleeng}>55 квартир и {timeLeft.days} дней осталось до завершения.</h1>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="footer_bottom_icons">
                    <div className="footer_icon">
                        <img src={facebook} alt="footer social icon" />
                    </div>

                    <div className="footer_icon">
                        <img src={instagram} alt="footer social icon" />
                    </div>

                    <div className="footer_icon">
                        <img src={linkedin} alt="footer social icon" />
                    </div>

                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=info@twins.com.ge' target='_blank' rel="noreferrer"><div className="footer_icon">
                        <img src={email} alt="footer social icon" />
                    </div></a>

                </div>

                <div className="footer_bottom_number_adrees" style={props.styleeng}>
                    <p className="footer_number" style={props.styleeng}>0322 73 24 19</p>
                    <p className="footer_adress" style={props.styleeng} ref={footerAdressRef}>გაყიდვების ოფისი-მისამართი</p>
                </div>

                <div className="footer_bottom_rights" style={props.styleeng}>
                    <p className="copyright" style={props.styleeng}>© 2023 Twins Development</p>
                </div>

                
            </div>

            

            
        </div>
    )
}
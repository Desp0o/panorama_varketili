import {React, useEffect, useState, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import {overFlow, overFlowAvailable} from "../overflow"
import Navbar from "../navbar"
import Footer from '../footer/Footer'
import './Apartments.css'
import '../../styles/PopUpMsg.css'
import Form from "../contacForm"

import { ApartmentsArr } from "./ApartmentsData";

import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import callFloatBtn from '../../images/callFloatBtn.png'
import xMark from '../../images/close.png'
import toBackimg from '../../images/toback.png'
import { LangContext } from "../langContext";

const styleENG={
    fontFamily: 'Roboto'
}

export default function Apartments(props){

    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)  

    const [style, setStyle] = useState(styleENG)

    //Floating Button Appear
    const scrollRef = useRef(null)
    const floatButtonRef = useRef()
    const [floatBtnClass, setFloatBtnClass] = useState('call_float_btn')

    function floatBtnHandler() {
        if(window.scrollY > scrollRef.current.getBoundingClientRect().height/8){
            setFloatBtnClass('call_float_btn call_float_btn_active')
            
        }else{
            setFloatBtnClass('call_float_btn')
        }
    }

    useEffect(()=>{
    
        window.addEventListener('scroll',floatBtnHandler)

        return () => {
            window.removeEventListener('scroll',floatBtnHandler);
          };  
    },[])
    //End Floating Button Appear

    // Email send Functionality
    const [popUp, setPopUp] = useState('pop_up_msg')

    // End Of Email Functionality

    const ApartmentRef = useRef()
    const tobackRef = useRef()

    useEffect(()=>{
        setStyle(null)

        tobackRef.current.innerText = 'უკან'
        ApartmentRef.current.innerText = 'შეარჩიე სასურველი ბინა'
        
    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        tobackRef.current.innerText = 'Back'
        ApartmentRef.current.innerText = 'Choose Your Apartment'

    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        tobackRef.current.innerText = 'Назад'
        ApartmentRef.current.innerText = 'Выберите желаемую квартиру'
    }
    },[isEng, isGeo, isRus])


    return(
        <>
        <Navbar activeApartments="active_page"/>

        <div className="to_back apartment_to__back">
                        <img src={toBackimg} alt="back arrow " />
                        <Link to='/components/MainPage'><p ref={tobackRef} style={style}>უკან</p></Link>
        </div>
        
        <div className="apartments_page" ref={scrollRef}>

            
    
            <h1 className="apartment_header" ref={ApartmentRef} style={style}>შეარჩიე სასურველი ბინა</h1>
        
            <div className="apartment_list">
                {
                    ApartmentsArr.map((render)=>{
                        return(
                            <Link to={render.link} key={render.id}>
                            <div className="card cardinpage" >
                                
                                <div className="card_inner_top">
                                    <img className={`card_render_main_screen outerRender ${render.class}`} src={render.image} alt='render'/>
                                </div>

                                <div className="card_inner_bottom">
                                    <div className="card_inner_bottom_left">
                                        <img className="mc_Icon" src={meterCoub} alt='mc icon'/>
                                        <p className="card_inner_bottom_p">{render.text1}</p>
                                    </div>

                                    <div className="card_inner_bottom_right">
                                        <img className="bed_Icon" src={bed} alt='bed icon'/>
                                        <p className="card_inner_bottom_p">{render.text2}</p>
                                    </div>
                                </div>
                                
                            </div>  
                            </Link>
                        )
                    })
                }
            </div>
        
        </div>

        <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> {setPopUp('pop_up_msg pop_up_active'); overFlow()}}
            alt='call btn'
        />

        <div className={popUp}>
            <div className="overlay" onClick={()=>{setPopUp('pop_up_msg'); overFlowAvailable()}}></div>

            <div className="form_outer">
                <img className="close" alt="close" src={xMark} onClick={()=>{setPopUp('pop_up_msg');overFlowAvailable()}}/>
                <Form styleeng={style}/>
            </div>
        </div>

        <Footer styleeng={style}/>

        </>
            
    )
}
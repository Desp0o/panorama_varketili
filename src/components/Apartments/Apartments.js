import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import Footer from '../footer/Footer'
import logo from '../../images/logo.png'
import './Apartments.css'
import '../../styles/PopUpMsg.css'
import Form from "../contacForm";

import { ApartmentsArr } from "./ApartmentsData";

import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import callFloatBtn from '../../images/callFloatBtn.png'
import xMark from '../../images/close.png'
import burgerStick from '../../images/sticks.png'
import burgerClose from '../../images/burgerClose.png'
import toBackimg from '../../images/toback.png'

const styleENG={
    fontFamily: 'Roboto'
}

export default function Apartments(){

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
    const form = useRef();
    const [popUp, setPopUp] = useState('pop_up_msg')

    // End Of Email Functionality

    const ApartmentRef = useRef()

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()

    const burgerApartments = useRef()
    const burgerAbout = useRef()
    const burgerProj = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    const tobackRef = useRef()

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)
        setStyle(null)

        tobackRef.current.innerHTML = 'უკან'

        GeoLanguage.current.style.color = '#029FA0'
        GeoLanguageBurger.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'მიმდინარე პროექტი'

        ApartmentRef.current.innerHTML = 'შეარჩიე სასურველი ბინა'

        burgerApartments.current.innerHTML = "ბინები"
        burgerAbout.current.innerHTML = "ჩვენ შესახებ"
        burgerProj.current.innerHTML = "მიმდინარე პროექტი"
        
    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)
        setStyle(styleENG)

        tobackRef.current.innerHTML = 'Back'

            GeoLanguage.current.style.color = 'black'
            GeoLanguageBurger.current.style.color = 'black'
            EngLanguage.current.style.color = '#029FA0'
            EngLanguageBurger.current.style.color = '#029FA0'
            RusLanguage.current.style.color = 'black'
            RusLanguageBurger.current.style.color = 'black'

            ApartmentRef.current.innerHTML = 'Choose Your Apartment'

            navbarLinkFlats.current.innerHTML = 'Apartments'
            navbarLinkAboutUs.current.innerHTML = 'About Us'
            navbarLinkAboutProject.current.innerHTML = 'About Project'

            //burger
            burgerApartments.current.innerHTML = "Apartments"
            burgerAbout.current.innerHTML = "About Us"
            burgerProj.current.innerHTML = "About Project"
        

    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)
        setStyle(styleENG)

        tobackRef.current.innerHTML = 'Назад'

            GeoLanguage.current.style.color = 'black'
            GeoLanguageBurger.current.style.color = 'black'
            EngLanguage.current.style.color = 'black'
            EngLanguageBurger.current.style.color = 'black'
            RusLanguage.current.style.color = '#029FA0'
            RusLanguageBurger.current.style.color = '#029FA0'

            navbarLinkFlats.current.innerHTML = 'Апартаменты'
            navbarLinkAboutUs.current.innerHTML = 'О нас'
            navbarLinkAboutProject.current.innerHTML = 'О проекте'

            ApartmentRef.current.innerHTML = 'Выберите желаемую квартиру'

            //burger
            burgerApartments.current.innerHTML = "Апартаменты"
            burgerAbout.current.innerHTML = "О нас"
            burgerProj.current.innerHTML = "О проекте"

    }
    },[isEng, isGeo, isRus])

    function makeENG() {
        setIsEng(true)
        setIsRus(false)
        setIsGeo(false)
        localStorage.setItem('language', 'eng')
    }

    function makeGEO() {
        setIsEng(false)
        setIsRus(false)
        setIsGeo(true)
        localStorage.removeItem('language')
    }

    function makeRUS() {
        setIsEng(false)
        setIsRus(true)
        setIsGeo(false)
        localStorage.setItem('language', 'rus')
    }

    //burgermenu panel///
    ////////////////////
    const GeoLanguageBurger = useRef()
    const EngLanguageBurger = useRef()
    const RusLanguageBurger = useRef()
    const [burger, setBurger] = useState('burgerMenu_panel')
    const [burgerBoolean, setBurgerBoolean] = useState(false)
    const [burgerIcon, setBurgerIcon] = useState(burgerStick)

    function burgerHandler() {
        if(!burgerBoolean){
            setBurgerBoolean(true)
            setBurger('burgerMenu_panel burgerMenu_panel_active')
            setBurgerIcon(burgerClose)
        }else{
            setBurgerBoolean(false)
            setBurger('burgerMenu_panel')
            setBurgerIcon(burgerStick)
        }
    }

    //*************//

    return(
        <>
        <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} /></Link>

                <div className="menu_and_langs">
                    {/* მენუ */}
                    <ul className="nav_menu">
                        <Link to='/components/Apartments/Apartments'><li className="menu_links active_page" ref={navbarLinkFlats} style={style}>ბინები</li></Link>
                        <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs} style={style}>ჩვენ შესახებ</li></Link>
                        <Link to='/components/AboutProject/AboutProject'><li className="menu_links" ref={navbarLinkAboutProject} style={style}>მიმდინარე პროექტი</li></Link>
                    </ul>

                    {/* ენები */}
                    <div className="languages">
                        <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                        <span>/</span>
                        <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                        <span>/</span>
                        <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
                    </div>
                </div>

                <div className='burgerMenu' onClick={burgerHandler}>
                    <img src={burgerIcon} alt="burgermenu" /> 
                </div>
            </div>
        </div>

        <div className={burger}>
            <div className="burgerMenu_link active_page">
                <Link to='/components/Apartments/Apartments' onClick={burgerHandler} ref={burgerApartments} style={style}>ბინები</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/aboutUsPage/AboutUsPage' onClick={burgerHandler} ref={burgerAbout} style={style}>ჩვენ შესახებ</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/AboutProject/AboutProject' onClick={burgerHandler} ref={burgerProj} style={style}>მიმდინარე პროექტი</Link>
            </div>

            <div className="burger_languages">
                <span ref={GeoLanguageBurger} onClick={()=> {makeGEO()}}>GE</span>
                <span>/</span>
                <span ref={EngLanguageBurger} onClick={()=> {makeENG()}}>EN</span>
                <span>/</span>
                <span ref={RusLanguageBurger} onClick={()=> {makeRUS()}}>RU</span>
            </div>
        </div>

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
                            <div className="card cardinpage" key={render.id}>
                                <Link to={render.link}>
                                <div className="card_inner_top">
                                    <img className="card_render_main_screen" src={render.image} />
                                </div>

                                <div className="card_inner_bottom">
                                    <div className="card_inner_bottom_left">
                                        <img className="mc_Icon" src={meterCoub} />
                                        <p className="card_inner_bottom_p">{render.text1}</p>
                                    </div>

                                    <div className="card_inner_bottom_right">
                                        <img className="bed_Icon" src={bed} />
                                        <p className="card_inner_bottom_p">{render.text2}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>  
                        )
                    })
                }
            </div>
        
        </div>

        <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> setPopUp('pop_up_msg pop_up_active')}
        />

        <div className={popUp}>
            <div className="overlay" onClick={()=>setPopUp('pop_up_msg')}></div>

            <div className="form_outer">
                <img className="close" alt="close" src={xMark} onClick={()=>setPopUp('pop_up_msg')}/>
                <Form />
            </div>
        </div>

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>

        </>
            
    )
}
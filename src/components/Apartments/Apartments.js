import {React, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import {Link} from  "react-router-dom";
import Footer from '../footer/Footer'
import logo from '../../images/logo.png'
import './Apartments.css'
import '../../styles/PopUpMsg.css'

import { ApartmentsArr } from "./ApartmentsData";

import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import callFloatBtn from '../../images/callFloatBtn.png'
import xMark from '../../images/close.png'

export default function Apartments(){
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
    const inputNameRef = useRef()
    const inputNumberRef = useRef()
    const inputMailRef = useRef()
    const inputSendref = useRef()
    const [popUp, setPopUp] = useState('pop_up_msg')

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
    // End Of Email Functionality

    const ApartmentRef = useRef()

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)

        GeoLanguage.current.style.color = '#029FA0'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'პროექტების შესახებ'

        ApartmentRef.current.innerHTML = 'შეარჩიე სასურველი ბინა'
        
    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'

        ApartmentRef.current.innerHTML = 'Choose Your Apartment'

        navbarLinkFlats.current.innerHTML = 'Apartments'
        navbarLinkAboutUs.current.innerHTML = 'About Us'
        navbarLinkAboutProject.current.innerHTML = 'About Project'
        

    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'

        navbarLinkFlats.current.innerHTML = ''
        navbarLinkAboutUs.current.innerHTML = ''
        navbarLinkAboutProject.current.innerHTML = ''

        ApartmentRef.current.innerHTML = ''

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

    return(
        <>
        <div className='Navbar'  style={{backgroundColor:'#A9C1A9'}}>
            <Link to='../MainPage'><img className="logo" src={logo} /></Link>

            <ul className="nav_menu">
                <Link to=''><li className="menu_links active_page" ref={navbarLinkFlats}>ბინები</li></Link>
                <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li></Link>
                <Link to='/components/AboutProject/AboutProject'><li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li></Link>
            </ul>

            <div className="languages">
                <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
            </div>
        </div>
        
        
        <div className="apartments_page" ref={scrollRef}>
    
            <h1 className="apartment_header" ref={ApartmentRef}>შეარჩიე სასურველი ბინა</h1>
        
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

            <div className="pop_up_msg_inner">

                <img src={xMark} className="xMark" alt="xmarkBtn" onClick={()=>setPopUp('pop_up_msg')}/>
                
                <h1 className="pop_up_header">დაგვიტოვე საკონტაქტო</h1>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="pop_up_msg_inner_top">
                        <input ref={inputNameRef} type="text" name="user_name" placeholder="სახელი" important="true"/>
                        <input ref={inputNumberRef} type="text" name="user_number" placeholder="ნომერი" important="true"/>
                    </div>

                    <div className="pop_up_msg_inner_middle">
                        <input ref={inputMailRef} className="email" type="email" name="user_email"  placeholder="ელ.ფოსტა" important="true"/>
                    </div>

                    <div className="pop_up_msg_inner_bottom">
                        <div className="pop_up_msg_inner_bottom submit_btn">
                            <button type="submit">
                                <span ref={inputSendref}>გაგზავნა</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus}/>

        </>
            
    )
}
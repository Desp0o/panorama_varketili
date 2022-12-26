import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import Footer from '../footer/Footer'
import logo from '../../images/logo.svg'
import './Apartments.css'

import { ApartmentsArr } from "./ApartmentsData";

import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'

export default function Apartments(){

    const ApartmentRef = useRef()

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const navbarLinkContact = useRef()
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
        navbarLinkContact.current.innerHTML = 'კონტაქტი'

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
        navbarLinkContact.current.innerHTML = 'Contact'
        

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
        navbarLinkContact.current.innerHTML = ''

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
                <li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li>
                <Link to='/components/contactPage/ContactPage'><li className="menu_links" ref={navbarLinkContact}>კონტაქტი</li></Link>
            </ul>

            <div className="languages">
                <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
            </div>
        </div>
        
        
        <div className="apartments_page">
    
            <h1 className="apartment_header" ref={ApartmentRef}>შეარჩიე სასურველი ბინა</h1>
        
            <div className="apartment_list">
                {
                    ApartmentsArr.map((render)=>{
                        return(
                            <Link to={render.link} key={render.id}><div className="card cardinpage">
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
                            </div>  </Link>
                        )
                    })
                }
            </div>
        
        </div>

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus}/>

        </>
            
    )
}
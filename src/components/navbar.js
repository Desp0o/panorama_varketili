import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import burgerStick from '../images/sticks.png'
import burgerClose from '../images/burgerClose.png'



export default function Navbar(props){
    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    function makeENG() {
        setIsEng(true)
        setIsRus(false)
        setIsGeo(false)
        localStorage.setItem('language', 'eng')
    }
    //*************//

    function makeGEO() {
        setIsEng(false)
        setIsRus(false)
        setIsGeo(true)
        localStorage.removeItem('language')
    }
    //*************//

    function makeRUS() {
        setIsEng(false)
        setIsRus(true)
        setIsGeo(false)
        localStorage.setItem('language', 'rus')
    }

    const styleENG={
        fontFamily: 'Roboto'
    }

    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()

    const GeoLanguage = useRef()
    const GeoLanguageBurger = useRef()

    const EngLanguageBurger = useRef()
    const EngLanguage = useRef()

    const RusLanguageBurger = useRef()
    const RusLanguage = useRef()

    const burgerApartments = useRef()
    const burgerAbout = useRef()
    const burgerProj = useRef()
    
    const [burgerIcon, setBurgerIcon] = useState(burgerStick)
    const [burger, setBurger] = useState('burgerMenu_panel')
    const [burgerBoolean, setBurgerBoolean] = useState(false)

    const [style, setStyle] = useState(styleENG)

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

    useEffect(()=>{
        setStyle(null)

        //სლაიდერის ტექსტი

        // Languages
        GeoLanguage.current.style.color = '#029FA0'
        GeoLanguageBurger.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        //burger
        burgerApartments.current.innerHTML = "ბინები"
        burgerAbout.current.innerHTML = "ჩვენ შესახებ"
        burgerProj.current.innerHTML = "მიმდინარე პროექტი"

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'მიმდინარე პროექტი'


    if(localStorage.language === 'eng'){
        
        setStyle(styleENG)

        // Languages
        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        burgerApartments.current.innerHTML = "Apartments"
        burgerAbout.current.innerHTML = "About Us"
        burgerProj.current.innerHTML = "About Project"
        

        navbarLinkFlats.current.innerHTML = 'Apartments'
        navbarLinkAboutUs.current.innerHTML = 'About Us'
        navbarLinkAboutProject.current.innerHTML = 'About Project'
       

        

    }else if(localStorage.language === 'rus'){
       
        setStyle(styleENG)

        // Languages
        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        EngLanguageBurger.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'
        RusLanguageBurger.current.style.color = '#029FA0'

        //burger
        burgerApartments.current.innerHTML = "Апартаменты"
        burgerAbout.current.innerHTML = "О нас"
        burgerProj.current.innerHTML = "О проекте"

        navbarLinkFlats.current.innerHTML = 'Апартаменты'
        navbarLinkAboutUs.current.innerHTML = 'О нас'
        navbarLinkAboutProject.current.innerHTML = 'О проекте'
        
    }
    },[props.isEng, props.isGeo, props.isRus])
    

    return(
        <>
        <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} /></Link>

                <div className="menu_and_langs">
                    {/* მენუ */}
                    <ul className="nav_menu">
                        <Link to='./components/Apartments/Apartments'><li className="menu_links" ref={navbarLinkFlats} style={style}>ბინები</li></Link>
                        <Link to='./components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs} style={style}>ჩვენ შესახებ</li></Link>
                        <Link to='./components/AboutProject/AboutProject'><li className="menu_links" ref={navbarLinkAboutProject} style={style}>მიმდინარე პროექტი</li></Link>
                    </ul>

                    {/* ენები */}
                    <div className="languages">
                        <span ref={GeoLanguage} onClick={props.geoLang}>GE</span>
                        <span>/</span>
                        <span ref={EngLanguage} onClick={props.engLang}>EN</span>
                        <span>/</span>
                        <span ref={RusLanguage} onClick={props.rusLang}>RU</span>
                    </div>
                </div>

                <div className='burgerMenu' onClick={burgerHandler}>
                    <img src={burgerIcon} alt="burgermenu" /> 
                </div>
            </div>
        </div>

        <div className={burger}>
            <div className="burgerMenu_link">
                <Link to='/components/Apartments/Apartments' onClick={burgerHandler} ref={burgerApartments} style={style}>ბინები</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/aboutUsPage/AboutUsPage' onClick={burgerHandler} ref={burgerAbout} style={style}>ჩვენ შესახებ</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/AboutProject/AboutProject' onClick={burgerHandler} ref={burgerProj} style={style}>მიმდინარე პროექტი</Link>
            </div>

            <div className="burger_languages">
                <span ref={GeoLanguageBurger} onClick={props.geoLang}>GE</span>
                <span>/</span>
                <span ref={EngLanguageBurger} onClick={props.engLang}>EN</span>
                <span>/</span>
                <span ref={RusLanguageBurger} onClick={props.rusLang}>RU</span>
            </div>
        </div>
        </>
    )
}
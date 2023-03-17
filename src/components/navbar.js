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
        burgerApartments.current.innerText = "ბინები"
        burgerAbout.current.innerText = "ჩვენ შესახებ"
        burgerProj.current.innerText = "მიმდინარე პროექტი"

        navbarLinkFlats.current.innerText = 'ბინები'
        navbarLinkAboutUs.current.innerText = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerText = 'მიმდინარე პროექტი'


    if(localStorage.language === 'eng'){
        
        setStyle(styleENG)

        // Languages
        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        burgerApartments.current.innerText = "Apartments"
        burgerAbout.current.innerText = "About Us"
        burgerProj.current.innerText = "About Project"
        

        navbarLinkFlats.current.innerText = 'Apartments'
        navbarLinkAboutUs.current.innerText = 'About Us'
        navbarLinkAboutProject.current.innerText = 'About Project'
       

        

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
        burgerApartments.current.innerText = "Апартаменты"
        burgerAbout.current.innerText = "О нас"
        burgerProj.current.innerText = "О проекте"

        navbarLinkFlats.current.innerText = 'Апартаменты'
        navbarLinkAboutUs.current.innerText = 'О нас'
        navbarLinkAboutProject.current.innerText = 'О проекте'
        
    }
    },[props.isEng, props.isGeo, props.isRus])
    

    return(
        <>
        <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} alt='logo' /></Link>

                <div className="menu_and_langs">
                    {/* მენუ */}
                    <div className="nav_menu">
                        <Link to='./components/Apartments/Apartments'     className="menu_links" style={style} ref={navbarLinkFlats}>ბინები</Link>
                        <Link to='./components/aboutUsPage/AboutUsPage'   className="menu_links" style={style} ref={navbarLinkAboutUs}>ჩვენ შესახებ</Link>
                        <Link to='./components/AboutProject/AboutProject' className="menu_links" style={style} ref={navbarLinkAboutProject}>მიმდინარე პროექტი</Link>
                    </div>

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
import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import logo from '../../images/logo.png'
import aboutimage from '../../images/aboutimage.png'
import burgerStick from '../../images/sticks.png'
import '../../styles/navbar.css'
import toBack from '../../images/toback.png'

import Footer from '../footer/Footer'

import './AboutUsPage.css'

const style={
    fontFamily: 'Roboto'
}

export default function AboutUsPage(){

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()

    const aboutPageHeader = useRef()
    const aboutPageP1 = useRef()
    const aboutPageP2 = useRef()
    const aboutPageP3 = useRef()
    const aboutPageP4 = useRef()
    const geoListRef = useRef()
    const engListRef = useRef()
    const rusListRef = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)

        GeoLanguage.current.style.color = '#029FA0'
        GeoLanguageBurger.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'მიმდინარე პროექტი'

        aboutPageHeader.current.innerHTML = 'თვინს დეველოპმენტი'
        aboutPageP1.current.innerHTML = 'Twins Development მრავალი წელია საქართველოს ბაზარზე, გამორჩეულ პროექტებს ქმნის.'
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'none'
        geoListRef.current.style.display = 'block'
        aboutPageP2.current.innerHTML = 'ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.'
        aboutPageP3.current.innerHTML = 'ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან.'
        aboutPageP4.current.innerHTML = 'Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.'
        
    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)

        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        EngLanguageBurger.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'
        RusLanguageBurger.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'Apartments'
        navbarLinkAboutUs.current.innerHTML = 'About Us'
        navbarLinkAboutProject.current.innerHTML = 'About Project'
        engListRef.current.style.display = 'block'
        rusListRef.current.style.display = 'none'
        geoListRef.current.style.display = 'none'
        aboutPageHeader.current.innerHTML = 'Twins Development'
        aboutPageP1.current.innerHTML = 'For years, Twins Development has been setting the standard for excellence in the Georgian market with:'
        
        aboutPageP2.current.innerHTML = 'With decades of experience and a keen eye for the best locations, our team is dedicated to making comfortable living accessible to all. '
        aboutPageP3.current.innerHTML = 'are our top priorities, and it\'s this commitment to detail that has earned us the trust of our customers. '
        aboutPageP4.current.innerHTML = 'We pride ourselves on creating projects that seamlessly blend architecture and urbanization, making a positive impact on the appearance of the city. <br/><br/> With Twins Development, you can trust that you are getting the best the industry has to offer.'
        
    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)

        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        EngLanguageBurger.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'
        RusLanguageBurger.current.style.color = '#029FA0'

        navbarLinkFlats.current.innerHTML = ''
        navbarLinkAboutUs.current.innerHTML = ''
        navbarLinkAboutProject.current.innerHTML = ''
        aboutPageHeader.current.innerHTML = ''
        aboutPageP1.current.innerHTML = ''
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'block'
        geoListRef.current.style.display = 'none'
        aboutPageP2.current.innerHTML = ''
        aboutPageP3.current.innerHTML = ''
        aboutPageP4.current.innerHTML = ''
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

    function burgerHandler() {
        if(!burgerBoolean){
            setBurgerBoolean(true)
            setBurger('burgerMenu_panel burgerMenu_panel_active')
        }else{
            setBurgerBoolean(false)
            setBurger('burgerMenu_panel')
        }
    }

    //*************//

    return(
        <div className="about_us_page">

            <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} /></Link>
                
                <div className="menu_and_langs">
                    {/* მენუ */}
                    <ul className="nav_menu">
                        <Link to='/components/Apartments/Apartments'><li className="menu_links" ref={navbarLinkFlats}>ბინები</li></Link>
                        <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li></Link>
                        <Link to='/components/AboutProject/AboutProject'><li className="menu_links" ref={navbarLinkAboutProject}>მიმდინარე პროექტი</li></Link>
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
                    <img src={burgerStick} alt="burgermenu" /> 
                </div>
            </div>
        </div>

        <div className={burger}>
            <div className="burgerMenu_link">
                <Link to='/components/Apartments/Apartments' onClick={burgerHandler}>ბინები</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/aboutUsPage/AboutUsPage' onClick={burgerHandler}>ჩვენ შესახებ</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/AboutProject/AboutProject' onClick={burgerHandler}>მიმდინარე პროექტი</Link>
            </div>

            <div className="burger_languages">
                <span ref={GeoLanguageBurger} onClick={()=> {makeGEO();burgerHandler()}}>GE</span>
                <span>/</span>
                <span ref={EngLanguageBurger} onClick={()=> {makeENG();burgerHandler()}}>EN</span>
                <span>/</span>
                <span ref={RusLanguageBurger} onClick={()=> {makeRUS();burgerHandler()}}>RU</span>
            </div>
        </div>

        <div className="to_back about_to_back">
                    <img src={toBack} alt="back arrow" />
                        <Link to='/components/MainPage'><p>უკან</p></Link>
                    </div>

            <div className="about_inner">

                <div className="about_inner_left">
                    <h1 ref={aboutPageHeader} className="about_us_header">თვინს დეველოპმენტი</h1>
                    
                    <div className="about_inner_left_texts" style={null}>
                    <p ref={aboutPageP1}> <span style={style} className="engTwins">Twins Development</span> მრავალი წელია საქართველოს ბაზარზე, გამორჩეულ პროექტებს ქმნის.</p>

                    <ul ref={geoListRef}>
                        <li className="about_us_list">გამორჩეული სტილი</li>
                        <li className="about_us_list">ინოვაციური მიდგომები</li>
                        <li className="about_us_list">პრემიუმ ხარისხის სამშენებლო მასალები</li>
                        <li className="about_us_list">მრავაწლიანი გამოცდილება</li>
                        <li className="about_us_list">საუკეთესო ლოკაციები</li>
                    </ul>

                    <ul ref={engListRef}>
                        <li className="about_us_list">distinctive style</li>
                        <li className="about_us_list">innovative approaches</li>
                        <li className="about_us_list">premium quality building materials</li>
                    </ul>

                    <ul ref={rusListRef}>
                        <li className="about_us_list"></li>
                        <li className="about_us_list"></li>
                        <li className="about_us_list"></li>
                        <li className="about_us_list"></li>
                        <li className="about_us_list"></li>
                    </ul>

                    <p ref={aboutPageP2}>ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.</p>

                    <p ref={aboutPageP3}>ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან. </p>

                    <p ref={aboutPageP4}>Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.</p>
                    </div>
                </div>

                <div className="about_inner_right">
                    <div className="aboutImage">
                        <img src={aboutimage} alt='about page image'/>
                    </div>
                </div>

            </div>

            
            <Footer iseng={isEng} isgeo={isGeo} isrus={isRus} />
        </div>
    )
}









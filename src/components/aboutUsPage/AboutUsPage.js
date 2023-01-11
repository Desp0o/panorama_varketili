import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import logo from '../../images/logo.png'
import aboutimage from '../../images/aboutimage.png'
import burgerStick from '../../images/sticks.png'
import burgerClose from '../../images/burgerClose.png'
import '../../styles/navbar.css'
import toBackimg from '../../images/toback.png'

import Footer from '../footer/Footer'

import './AboutUsPage.css'

const styleENG={
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
    const aboutPageP2 = useRef()
    const aboutPageP3 = useRef()
    const aboutPageP4 = useRef()
    const aboutPageP5 = useRef()
    const geoListRef = useRef()
    const engListRef = useRef()
    const rusListRef = useRef()

    const burgerApartments = useRef()
    const burgerAbout = useRef()
    const burgerProj = useRef()

    const geoTwinsWord = useRef()
    const engTwinsWord = useRef()
    const rusTwinsWord = useRef()

    const toBack = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)
    const [style, setStyle] = useState(styleENG)

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)
        setStyle(null)



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
        toBack.current.innerHTML = 'უკან'
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'none'
        geoListRef.current.style.display = 'block'
        geoTwinsWord.current.style.display = 'block'
        engTwinsWord.current.style.display = 'none'
        rusTwinsWord.current.style.display = 'none'
        aboutPageP2.current.innerHTML = 'ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.'
        aboutPageP3.current.innerHTML = 'ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან.'
        aboutPageP4.current.innerHTML = 'Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.'
        aboutPageP5.current.style.display = 'none'

        //burger
        burgerApartments.current.innerHTML = "ბინები"
        burgerAbout.current.innerHTML = "ჩვენ შესახებ"
        burgerProj.current.innerHTML = "მიმდინარე პროექტი"



    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)
        setStyle(styleENG)

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
        toBack.current.innerHTML = 'Back'
        geoTwinsWord.current.style.display = 'none'
        engTwinsWord.current.style.display = 'block'
        rusTwinsWord.current.style.display = 'none'
        aboutPageP2.current.innerHTML = 'With decades of experience and a keen eye for the best locations, our team is dedicated to making comfortable living accessible to all. '
        aboutPageP3.current.innerHTML = 'are our top priorities, and it\'s this commitment to detail that has earned us the trust of our customers. '
        aboutPageP4.current.innerHTML = 'We pride ourselves on creating projects that seamlessly blend architecture and urbanization, making a positive impact on the appearance of the city.'
        aboutPageP5.current.style.display = 'block'
        aboutPageP5.current.innerHTML = 'With Twins Development, you can trust that you are getting the best the industry has to offer.'

        //burger
        burgerApartments.current.innerHTML = "Apartments"
        burgerAbout.current.innerHTML = "About Us"
        burgerProj.current.innerHTML = "About Project"
    
    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)
        setStyle(styleENG)

        GeoLanguage.current.style.color = 'black'
        GeoLanguageBurger.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        EngLanguageBurger.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'
        RusLanguageBurger.current.style.color = '#029FA0'

        navbarLinkFlats.current.innerHTML = 'Апартаменты'
        navbarLinkAboutUs.current.innerHTML = 'О нас'
        navbarLinkAboutProject.current.innerHTML = 'О проекте'
        aboutPageHeader.current.innerHTML = 'Twins Development'
        toBack.current.innerHTML = 'назад'
        geoTwinsWord.current.style.display = 'none'
        engTwinsWord.current.style.display = 'none'
        rusTwinsWord.current.style.display = 'block'
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'block'
        geoListRef.current.style.display = 'none'
        aboutPageP2.current.innerHTML = 'Наша команда, обладающая многолетним опытом и хорошим взглядом на ситуацию, стремится сделать комфортную жизнь доступной для всех.'
        aboutPageP3.current.innerHTML = 'Безопасность и профессионализм являются нашими главными приоритетами, и именно это внимание к деталям заслужило нам доверие наших клиентов.'
        aboutPageP4.current.innerHTML = 'Мы гордимся тем, что создаем проекты, которые сочетают архитектуру и урбанизацию органично, внося свой вклад в внешний вид города.'
        aboutPageP5.current.style.display = 'block'
        aboutPageP5.current.innerHTML = 'С Twins Development вы можете быть уверены, что получите самое лучшее, что может предложить отрасль.'
    
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
        <div className="about_us_page">

        <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} /></Link>
                
                <div className="menu_and_langs">
                    {/* მენუ */}
                    <ul className="nav_menu">
                        <Link to='/components/Apartments/Apartments'><li className="menu_links" ref={navbarLinkFlats} style={style}>ბინები</li></Link>
                        <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links active_page" ref={navbarLinkAboutUs} style={style}>ჩვენ შესახებ</li></Link>
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
            <div className="burgerMenu_link">
                <Link to='/components/Apartments/Apartments' onClick={burgerHandler} style={style} ref={burgerApartments}>ბინები</Link>
            </div>

            <div className="burgerMenu_link active_page">
                <Link to='/components/aboutUsPage/AboutUsPage' onClick={burgerHandler} style={style} ref={burgerAbout}>ჩვენ შესახებ</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/AboutProject/AboutProject' onClick={burgerHandler} style={style} ref={burgerProj}>მიმდინარე პროექტი</Link>
            </div>

            <div className="burger_languages">
                <span ref={GeoLanguageBurger} onClick={()=> {makeGEO()}}>GE</span>
                <span>/</span>
                <span ref={EngLanguageBurger} onClick={()=> {makeENG()}}>EN</span>
                <span>/</span>
                <span ref={RusLanguageBurger} onClick={()=> {makeRUS()}}>RU</span>
            </div>
        </div>

            <div className="to_back about_to_back">
                    <img src={toBackimg} alt="back arrow" />
                        <Link to='/components/MainPage'><p style={style} ref={toBack}>უკან</p></Link>
            </div>

            <div className="about_inner">

                <div className="about_inner_left">
                    <h1 ref={aboutPageHeader} className="about_us_header" style={style}>თვინს დეველოპმენტი</h1>
                    
                    <div className="about_inner_left_texts" style={null}>
                    <p ref={geoTwinsWord}> თვინს დეველოპმენტი მრავალი წელია საქართველოს ბაზარზე, გამორჩეულ პროექტებს ქმნის.</p>
                    <p ref={engTwinsWord} style={style}> For years, Twins Development has been setting the standard for excellence in the Georgian market with</p>
                    <p ref={rusTwinsWord} style={style}>Компания Твинс Девелопмент на грузинском рынке уже много лет устанавливает стандарты качества:</p>


                    <ul ref={geoListRef}>
                        <li className="about_us_list">გამორჩეული სტილი</li>
                        <li className="about_us_list">ინოვაციური მიდგომები</li>
                        <li className="about_us_list">პრემიუმ ხარისხის სამშენებლო მასალები</li>
                        <li className="about_us_list">მრავაწლიანი გამოცდილება</li>
                        <li className="about_us_list">საუკეთესო ლოკაციები</li>
                    </ul>

                    <ul ref={engListRef} style={style}>
                        <li className="about_us_list">distinctive style</li>
                        <li className="about_us_list">innovative approaches</li>
                        <li className="about_us_list">premium quality building materials</li>
                    </ul>

                    <ul ref={rusListRef}>
                        <li className="about_us_list">уникальный стиль</li>
                        <li className="about_us_list">инновационные подходы</li>
                        <li className="about_us_list">высококачественные строительные материалы</li>
                    </ul>

                    <p ref={aboutPageP2} style={style}>ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.</p>

                    <p ref={aboutPageP3} style={style}>ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან. </p>

                    <p ref={aboutPageP4} style={style}>Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.</p>
                    
                    <p ref={aboutPageP5} style={style}>Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.</p>
                    </div>
                </div>

                <div className="about_inner_right">
                    <div className="aboutImage">
                        <img src={aboutimage} alt='about page image'/>
                    </div>
                </div>

            </div>

            
            <Footer iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>
        </div>
    )
}









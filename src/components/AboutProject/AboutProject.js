import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import logo from '../../images/logo.png'
import '../../index.css'
import Footer from "../footer/Footer";
import'./AboutProject.css'
import line29 from '../../images/Line29.png'
import sofa from '../../images/sofa.png'
import Form from "../contacForm"

import '../../styles/PopUpMsg.css'

import callFloatBtn from '../../images/callFloatBtn.png'
import xMark from '../../images/close.png'
import burgerStick from '../../images/sticks.png'

export default function AboutProject(){

    //Floating Button Appear
    const scrollRef = useRef(null)
    const floatButtonRef = useRef()
    const [floatBtnClass, setFloatBtnClass] = useState('call_float_btn')
    const [addHeight, setAddHeight] = useState(200) 

    function floatBtnHandler() {
        if(scrollRef.current.getBoundingClientRect().width > 1300){
            setAddHeight(0)
        }

        if(window.scrollY > scrollRef.current.getBoundingClientRect().height/2+addHeight){
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
    },[window.scrollY])
    //End Floating Button Appear

    const [popUp, setPopUp] = useState('pop_up_msg')

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)
    
    const [data, setData] = useState(100)

    const [fadeOut, setFadeOut] = useState('about_proj_page')
    const [map, setMap] = useState('map')

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
        
    }
    },[isEng, isGeo, isRus])
    
    useEffect(()=>{
        const fadeOutTimer = setTimeout(()=>{
            setFadeOut('about_proj_page about_proj_page_active')
            setMap('map map_active')
        },1)

        return (()=>{
            clearTimeout(fadeOutTimer)
        })
    },[])

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
        <> 
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

            <div className={popUp}>
                <div className="overlay" onClick={()=>setPopUp('pop_up_msg')}></div>

                <div className="form_outer">
                    <img className="close" alt="close" src={xMark} onClick={()=>setPopUp('pop_up_msg')}/>
                    <Form />
                </div>
            </div>

            <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> setPopUp('pop_up_msg pop_up_active')}
            />

            <div className={fadeOut}>
                <h1 className="about_proj_page_header">ლოკაცია</h1>
                <p className="about_proj_page_p">ვარკეთილის პროექტი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.</p>
                <p className="about_proj_page_p second_p"> ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.</p>
            </div>

            <div className={map} ref={scrollRef}>
                <iframe className="map_frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28337.617671515094!2d44.87096419968619!3d41.70702743657408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044127860f0ad61%3A0x8f893e58130af269!2zNjgg4YOV4YOY4YOl4YOi4YOd4YOgIOGDmeGDo-GDnuGDoOGDkOGDq-GDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1672070202149!5m2!1ska!2sge" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="project_timeline_txt">
                <h2>პროექტის ვადები</h2>
                <p>ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.</p>
            </div>

            <div className="rangesDiv">

                <span className="circle1"><img className="line1" src={line29}/></span>
                    <p className="circleTXT circle_txt1">პროექტის დაწყება</p>
                    <div className="range_msg_box msgBox1"><p className="msgBoxText">თებერვალი 2023</p></div>
                

                <span className="circle2"><img className="line2" src={line29}/></span>
                    <p className="circleTXT circle_txt2">საძირკველი</p>
                    <div className="range_msg_box msgBox2"><p className="msgBoxText">მარტი 2023</p></div>
                

                <span className="circle3"><img className="line3" src={line29}/></span>
                    <p className="circleTXT circle_txt3">მონოლითი</p>
                    <div className="range_msg_box msgBox3"><p className="msgBoxText">აპრილი 2023</p></div>


                <span className="circle4"><img className="line4" src={line29}/></span>
                    <p className="circleTXT circle_txt4">შავი კარკასი</p>
                    <div className="range_msg_box msgBox4"><p className="msgBoxText">ოქტომბერი 2023</p></div>

                <input className="backRange" type='range' min='0' max='0' step='1' disabled/>
                <input className="inputRange" type='range' min='0' max='200' step='1' value={data} onChange={(e)=> setData(e.target.value)} />
            
            </div>

            <div className="ganvadeba">
                <div className="ganvadeba_left">
                    <h2>განვადება</h2>
                    <p>ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.</p>
                    <p>აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით.</p>
                </div>

                <div className="ganvadeba_right">
                    <img src={sofa} alt="sofa"/>
                </div>

            </div>
            <Footer />
        </>
    )
}
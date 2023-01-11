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
import toBack from '../../images/toBackWhite.png'

const styleENG={
    fontFamily: 'Roboto'
}

export default function AboutProject(){

    const [style, setStyle] = useState(styleENG)

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

    const februaryRef = useRef()
    const marchRef = useRef()
    const aprilRef = useRef()
    const octomberRef = useRef()

    const burgerApartments = useRef()
    const burgerAbout = useRef()
    const burgerProj = useRef()

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

        februaryRef.current.innerHTML = 'თებერვალი'
        marchRef.current.innerHTML = 'მარტი'
        aprilRef.current.innerHTML = 'აპრილი'
        octomberRef.current.innerHTML = 'ოქტომბერი'

        burgerApartments.current.innerHTML = "ბინები"
        burgerAbout.current.innerHTML = "ჩვენ შესახებ"
        burgerProj.current.innerHTML = "მიმდინარე პროექტი"

        firstSectionHeaderRef.current.innerHTML = 'ლოკაცია'
        firstSectionParagraphRef.current.innerHTML = 'ვარკეთილის პროექტი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.'
        firstSectionParagrap2hRef.current.innerHTML = 'ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.'

        proTimelineHeaderRef.current.innerHTML = 'პროექტის ვადები'
        proTimelineparagraphRef.current.innerHTML = 'ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.'
        
        projStartRef.current.innerHTML = 'პროექტის დაწყება'
        projFoundationRef.current.innerHTML = 'საძირკველი'
        projMonolitRef.current.innerHTML = 'მონოლითი'
        projMonolitRef.current.classList.remove('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'შავი კარკასი'
        projBlackFrame.current.classList.remove('circle_txt4_rus')

        ganvadebaRef.current.innerHTML = 'განვადება'
        ganvadebaParagraph1Ref.current.innerHTML = 'ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.'
        ganvadebaParagraph2Ref.current.innerHTML = "აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით."

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

        februaryRef.current.innerHTML = 'February'
        marchRef.current.innerHTML = 'March'
        aprilRef.current.innerHTML = 'April'
        octomberRef.current.innerHTML = 'Octomber'

        //burger
        burgerApartments.current.innerHTML = "Apartments"
        burgerAbout.current.innerHTML = "About Us"
        burgerProj.current.innerHTML = "About Project"

        firstSectionHeaderRef.current.innerHTML = 'ლოკაცია'
        firstSectionParagraphRef.current.innerHTML = 'ვარკეთილის პროექტი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.'
        firstSectionParagrap2hRef.current.innerHTML = 'ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.'

        proTimelineHeaderRef.current.innerHTML = 'Project Deadlines'
        proTimelineparagraphRef.current.innerHTML = 'The project at Varketili is set to be finished by December 2024.<br/>The apartments will be delivered in a green frame condition.'
        
        projStartRef.current.innerHTML = 'Project start'
        projFoundationRef.current.innerHTML = 'Foundation'
        projMonolitRef.current.innerHTML = 'Monolith'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'Black Frame'
        projBlackFrame.current.classList.remove('circle_txt4_rus')

        ganvadebaRef.current.innerHTML = 'Installment'
        ganvadebaParagraph1Ref.current.innerHTML = 'The option of domestic 2-year interest-free installment plans is available for the purchase of apartments.'
        ganvadebaParagraph2Ref.current.innerHTML = "The bank's 5-10 year mortgage loan is also available."

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

        februaryRef.current.innerHTML = 'Февраль'
        marchRef.current.innerHTML = 'Mарт'
        aprilRef.current.innerHTML = 'Aпреля'
        octomberRef.current.innerHTML = 'Октябрь'

        //burger
        burgerApartments.current.innerHTML = "Апартаменты"
        burgerAbout.current.innerHTML = "О нас"
        burgerProj.current.innerHTML = "О проекте"

        proTimelineHeaderRef.current.innerHTML = 'Сроки проекта'
        proTimelineparagraphRef.current.innerHTML = 'Проект в Варкетили запланирован к завершению к декабрю 2024 года.<br/>Квартиры будут переданы в зеленом каркасном состоянии.'
    
        projStartRef.current.innerHTML = 'Запуск проекта'
        projFoundationRef.current.innerHTML = 'Фундамент'
        projMonolitRef.current.innerHTML = 'монолит'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'Черный каркас'   
        projBlackFrame.current.classList.add('circle_txt4_rus')

        ganvadebaRef.current.innerHTML = 'Рассрочка'
        ganvadebaParagraph1Ref.current.innerHTML = 'Возможность использования домашних беспроцентных инсталляционных планов на 2 года доступна для покупки квартир.'
        ganvadebaParagraph2Ref.current.innerHTML = 'И доступна ипотечная займ на период от 5 до 10 лет от банка.'

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

    const firstSectionHeaderRef = useRef()
    const firstSectionParagraphRef = useRef()
    const firstSectionParagrap2hRef = useRef()
    const proTimelineHeaderRef = useRef()
    const proTimelineparagraphRef = useRef()
    const projStartRef = useRef()
    const projFoundationRef = useRef()
    const projMonolitRef = useRef()
    const projBlackFrame = useRef()
    const ganvadebaRef = useRef()
    const ganvadebaParagraph1Ref = useRef()
    const ganvadebaParagraph2Ref = useRef()
    
    return(
        <> 
        <div className='Navbar'>
            <div className="navbar_inner">
                
                {/* ლოგო */}
                <Link to='/components/MainPage'><img className="logo" src={logo} /></Link>

                <div className="menu_and_langs">
                    {/* მენუ */}
                    <ul className="nav_menu">
                        <Link to='/components/Apartments/Apartments'><li className="menu_links" ref={navbarLinkFlats} style={style}>ბინები</li></Link>
                        <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs} style={style}>ჩვენ შესახებ</li></Link>
                        <Link to='/components/AboutProject/AboutProject'><li className="menu_links active_page" ref={navbarLinkAboutProject} style={style}>მიმდინარე პროექტი</li></Link>
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
                <Link to='/components/Apartments/Apartments' onClick={burgerHandler} ref={burgerApartments} style={style}>ბინები</Link>
            </div>

            <div className="burgerMenu_link">
                <Link to='/components/aboutUsPage/AboutUsPage' onClick={burgerHandler} ref={burgerAbout} style={style}>ჩვენ შესახებ</Link>
            </div>

            <div className="burgerMenu_link  active_page">
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
                <h1 className="about_proj_page_header" ref={firstSectionHeaderRef} style={style}>ლოკაცია</h1>
                <p className="about_proj_page_p" ref={firstSectionParagraphRef} style={style}>ვარკეთილის პროექტი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.</p>
                <p className="about_proj_page_p second_p" ref={firstSectionParagrap2hRef} style={style}> ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.</p>
            </div>

            <div className={map} ref={scrollRef}>
                <iframe className="map_frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28337.617671515094!2d44.87096419968619!3d41.70702743657408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044127860f0ad61%3A0x8f893e58130af269!2zNjgg4YOV4YOY4YOl4YOi4YOd4YOgIOGDmeGDo-GDnuGDoOGDkOGDq-GDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1672070202149!5m2!1ska!2sge" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="to_back about_proj_to_back">
                        <img src={toBack} alt="back arrow " />
                        <Link to='/components/MainPage'><p>უკან</p></Link>
            </div>

            <div className="project_timeline_txt">
                <h2 ref={proTimelineHeaderRef} style={style}>პროექტის ვადები</h2>
                <p ref={proTimelineparagraphRef} style={style}>ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.</p>
            </div>

            <div className="rangesDiv">

                <span className="circle1"><img className="line1" src={line29}/></span>
                    <p className="circleTXT circle_txt1" style={style} ref={projStartRef}>პროექტის დაწყება</p>
                    <div className="range_msg_box msgBox1"><p className="msgBoxText" ref={februaryRef} style={style}>თებერვალი 2023</p></div>
                

                <span className="circle2"><img className="line2" src={line29}/></span>
                    <p className="circleTXT circle_txt2" style={style} ref={projFoundationRef}>საძირკველი</p>
                    <div className="range_msg_box msgBox2"><p className="msgBoxText" ref={marchRef} style={style}>მარტი 2023</p></div>
                

                <span className="circle3"><img className="line3" src={line29}/></span>
                    <p className="circleTXT circle_txt3 circle_txt3_rus" style={style} ref={projMonolitRef}>მონოლითი</p>
                    <div className="range_msg_box msgBox3"><p className="msgBoxText" ref={aprilRef} style={style}>აპრილი 2023</p></div>


                <span className="circle4"><img className="line4" src={line29}/></span>
                    <p className="circleTXT circle_txt4" style={style} ref={projBlackFrame}>შავი კარკასი</p>
                    <div className="range_msg_box msgBox4"><p className="msgBoxText" ref={octomberRef} style={style}>ოქტომბერი 2023</p></div>

                <input className="backRange" type='range' min='0' max='0' step='1' disabled/>
                <input className="inputRange" type='range' min='0' max='200' step='1' value={data} onChange={(e)=> setData(e.target.value)} />
            
            </div>

            <div className="ganvadeba">
                <div className="ganvadeba_left">
                    <h2 ref={ganvadebaRef} style={style}>განვადება</h2>
                    <p ref={ganvadebaParagraph1Ref} style={style}>ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.</p>
                    <p ref={ganvadebaParagraph2Ref} style={style}>აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით.</p>
                </div>

                <div className="ganvadeba_right">
                    <img src={sofa} alt="sofa"/>
                </div>

            </div>
            <Footer iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>
        </>
    )
}
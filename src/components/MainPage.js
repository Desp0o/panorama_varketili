import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';
import Flats from "./Flats/Flats";
import Features from "./features/Features";
import Contact from './contact/Contact'
import Footer from "./footer/Footer";
import Form from "./contacForm";

import '../styles/navbar.css'
import '../styles/slider.css'
import '../index.css'
import '../styles/PopUpMsg.css'
import '../styles/WhyPanorama.css'

import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import logo from '../images/logo.png'
import xMark from '../images/close.png'
import floatClif from '../images/floatClif.png'
import info from '../images/info.png'
import burgerStick from '../images/sticks.png'

import callFloatBtn from '../images/callFloatBtn.png'


const imgArr = [
    {
        id:1,
        image: `${slider1}`,
        text: 'თბილისის ხედი შენი ხელის გულზე',
        textEng: 'Tbilisi at your fingertips',
        textRus: 'Вид Тбилиси на ладони'
    },
  
    {
        id:2,
        image: `${slider2}`,
        text: 'ხედი თბილისზე შენი სახლიდან',
        textEng: 'The beauty of Tbilisi from the comfort of your home.',
        textRus: 'Наслаждайтесь красотой Тбилиси без выхода из дома.'
    },
  
    {
        key:'3',
        image: `${slider3}`,
        text: 'გამოცდილებით დაგეგმილი',
        textEng: 'Masterfully designed',
        textRus: 'Идеально спроектировано'
    },

    {
        key:'4',
        image: `${slider4}`,
        text: 'კრეატიულად განხორციელებული',
        textEng: 'Flawlessly implemented',
        textRus: 'безупречно реализовано'
    }
]
const styleENG={
    fontFamily: 'Roboto'
}
export default function MainPage() {

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

    const dot0 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()


    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const sliderHeaderRef = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()
    const sliderBtnRef = useRef()

    // Email send Functionality
    const form = useRef();
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

    const whyPanoramaHeaderRef = useRef()
    const whyPanoramaParagraphRef = useRef()
    const whyPanoramaParagraphRef2 = useRef()
    const whyPanoramaParagraphRef3 = useRef()
    const whyPanoramaParagraphRef4 = useRef()
    const whyPanoramaParagraphRef5 = useRef()

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    const [sliderClass, setSliderClass] = useState('slider_inner')
    

    let [index, setIndex] = useState(0)
    const slideLength = imgArr.length

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
    //*************//

    function nextSlide() {
        if(index === slideLength-1){
            setIndex(0)
          }else{
            setIndex(index+1)
          }
    }
    //*************//

    function prevSlide(){
        
        if(index === 0){
            index = setIndex(slideLength-1)
        }else{
            setIndex(index-1)
        }
    }
    //*************//

    function dotHandler(num){
        setIndex(num)
    }
    //*************//

    useEffect(()=>{
        if(index === 0){
            dot0.current.style.opacity = '1'
        }else{
            dot0.current.style.opacity = '0.5'
        }

        if(index === 1){
            dot1.current.style.opacity = '1'
        }else{
            dot1.current.style.opacity = '0.5'
        }

        if(index === 2){
            dot2.current.style.opacity = '1'
        }else{
            dot2.current.style.opacity = '0.5'
        }

        if(index === 3){
            dot3.current.style.opacity = '1'
        }else{
            dot3.current.style.opacity = '0.5'
        }
    },[index])
    //*************//

    useEffect(()=>{
            setIsEng(false)
            setIsGeo(true)
            setIsRus(false)
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

            sliderHeaderRef.current.innerHTML = 'პანორამა ვარკეთილი'
            sliderBtnRef.current.innerHTML = 'დაგვირეკეთ'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = 'რატომ პანორამა ვარკეთილი?'
            whyPanoramaParagraphRef.current.innerHTML = 'პროექტის უნიკალურობას განაპირობებს, თბილისზე გაშლილი პანორამული ხედები.'
            whyPanoramaParagraphRef2.current.innerHTML = 'შენი სახლი ქალაქზე ახალი პერსპექტივითაა გარშემორტყმული,სადაც კომფორტული ცხოვრების სტილი, თანამედროვე არქიტექტურასთან და გამორჩეულ იერსახესთანაა შეხამებული.'
            whyPanoramaParagraphRef3.current.innerHTML = 'პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.'
            whyPanoramaParagraphRef4.current.innerHTML = 'გაიგე დეტალურად პროექტის შესახებ'
            whyPanoramaParagraphRef5.current.style.display = 'none'
            
        if(localStorage.language === 'eng'){
            setIsEng(true)
            setIsGeo(false)
            setIsRus(false)
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
            sliderHeaderRef.current.innerHTML = 'Panorama Varketili'
            sliderBtnRef.current.innerHTML = 'Contact Us'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = 'Why Panorama Varketili?'
            whyPanoramaParagraphRef.current.innerHTML =  'You’ll be surrounded by breathtaking panoramic views, making it truly one-of-a-kind!'    
            whyPanoramaParagraphRef2.current.innerHTML = 'These unparalleled views will give you a new perspective on the city and all it offers.'
            whyPanoramaParagraphRef3.current.innerHTML = "But that's not all. We believe that comfortable living and modern architecture go hand in hand, and we've designed our building with this in mind."
            whyPanoramaParagraphRef4.current.innerHTML = 'Learn more about the project'
            whyPanoramaParagraphRef5.current.innerHTML = "Our distinctive appearance and innovative approaches help us set a new standard in the synthesis of urbanization, making Panorama Varketili a truly unique place to call home."
            whyPanoramaParagraphRef5.current.style.display = 'block'
            

        }else if(localStorage.language === 'rus'){
            setIsEng(false)
            setIsGeo(false)
            setIsRus(true)
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
            sliderHeaderRef.current.innerHTML = 'Панорама Варкетили'
            sliderBtnRef.current.innerHTML = 'контакт'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = 'Почему Панорама Варкетили?'
            whyPanoramaParagraphRef.current.innerHTML = 'Когда вы окажетесь здесь, вы будете окружены великолепными панорамными видами, которые позволят вам увидеть город с совершенно новой стороны.'
            whyPanoramaParagraphRef2.current.innerHTML = 'Однако, мы также заботимся о том, чтобы наше здание было комфортным и соответствовало современным требованиям архитектуры.'
            whyPanoramaParagraphRef3.current.innerHTML =  'Наш заметный внешний вид и инновационный подход помогают нам установить новые стандарты в сфере урбанизации, что делает Панорама Варкетили истинно уникальным местом, которое можно назвать домом.'
            whyPanoramaParagraphRef4.current.innerHTML = 'Узнать больше о проекте'
            whyPanoramaParagraphRef5.current.style.display = 'none'
        }
    },[isEng, isGeo, isRus])
    //*************//

    // სლაიდერის ავტომატიზაცია რესპინსივზე
    useEffect(()=>{
        let sliderInterval = null

        if(document.body.getBoundingClientRect().width<770){
            sliderInterval = setInterval(()=>{
            if(index === slideLength-1){
                setIndex(0)
              }else{
                setIndex(index+1)
              }
        },5000)
    }

        return ()=>{
            clearInterval(sliderInterval)
        }
    }, [index])
    //*************//


    //burgermenu panel///
    ////////////////////
    const GeoLanguageBurger = useRef()
    const EngLanguageBurger = useRef()
    const RusLanguageBurger = useRef()
    const burgerApartments = useRef()
    const burgerAbout = useRef()
    const burgerProj = useRef()

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

        <div className={popUp}>
            <div className="overlay" onClick={()=>setPopUp('pop_up_msg')}></div>

            <div className="form_outer">
                <img className="close" alt="close" src={xMark} onClick={()=>setPopUp('pop_up_msg')}/>
                <Form />
            </div>
           
        </div>
        
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

            <div className="burgerMenu_link">
                <Link to='/components/AboutProject/AboutProject' onClick={burgerHandler} ref={burgerProj} style={style}>მიმდინარე პროექტი</Link>
            </div>

            <div className="burger_languages">
                <span ref={GeoLanguageBurger} onClick={()=> {makeGEO();burgerHandler()}}>GE</span>
                <span>/</span>
                <span ref={EngLanguageBurger} onClick={()=> {makeENG();burgerHandler()}}>EN</span>
                <span>/</span>
                <span ref={RusLanguageBurger} onClick={()=> {makeRUS();burgerHandler()}}>RU</span>
            </div>
        </div>

        

        <div className="slider" ref={scrollRef}>
            <div className={sliderClass}>
            

            {/* წერტილები */}
            <div className="dots">
                <span ref={dot0} className='dot' onClick={()=>dotHandler(0)}></span>
                <span ref={dot1} className='dot' onClick={()=>dotHandler(1)}></span>
                <span ref={dot2} className='dot' onClick={()=>dotHandler(2)}></span>
                <span ref={dot3} className='dot' onClick={()=>dotHandler(3)}></span>
            </div>

            {/* სლაიდერის სათაური */}
            <h1 className="slider_header" ref={sliderHeaderRef} style={style}>პანორამა ვარკეთილი</h1>

            <div className="slider_btn" onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
                <span ref={sliderBtnRef} style={style}>დაგვირეკე</span>
            </div>

            {/* წინა ღილაკი */}
            <div className="prev_button" onClick={()=>prevSlide()}>
            <svg className="svg leftArrow" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6582 13.8254L7.6582 7.82538"  strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1.91113 1.58276L7.65826 7.8254"  strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>

            {/* შემდეგი ღილაკი */}
            <div className="next_button" onClick={()=>nextSlide()}>
                <svg className="svg rightArrow" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6582 13.8254L7.6582 7.82538"  strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1.91113 1.58276L7.65826 7.8254"  strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>

            {/* სლაიდერი */}
            {imgArr.map((slide, slideIndex)=>{

                let slideClass = 'slide'
                let textClass = 'slider_paragraph'
                let slidetParagraph = ''

                {index === slideIndex  ? slideClass = 'slider_img slider_active' : slideClass = 'slider_img'}
                {index === slideIndex  ? textClass = 'slider_paragraph text_active' : textClass = 'slider_paragraph'}
                
                if(localStorage.language === 'rus'){
                    slidetParagraph = `${slide.textRus}`
                }else if(localStorage.language === 'eng'){
                    slidetParagraph = `${slide.textEng}`
                }else{
                    slidetParagraph = `${slide.text}`
                }

                return(
                    <div key={slideIndex}>
                    <div className='mapping-div' key={slideIndex}>
                        <img  className={slideClass} src={slide.image}/>
                    </div>

                    <div>
                        <p className={textClass} style={style}>{slidetParagraph}</p>
                    </div>
                    
                    </div>
                )
                })}
                
            </div>    
        </div>

        <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> setPopUp('pop_up_msg pop_up_active')}
        />

        <Flats iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style} />

        <div className='why_panorama'>
            <div className="header_txt_btn">
                <h1 className="why_panorama_h1" ref={whyPanoramaHeaderRef} style={style}>რატომ პანორამა ვარკეთილი?</h1><br/>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef} style={style}>პროექტის უნიკალურობას განაპირობებს, თბილისზე გაშლილი პანორამული ხედები.</p><br/>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef2} style={style}>შენი სახლი ქალაქზე ახალი პერსპექტივითაა გარშემორტყმული,სადაც კომფორტული ცხოვრების სტილი,
                 თანამედროვე არქიტექტურასთან და გამორჩეულ იერსახესთანაა შეხამებული.</p><br/>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef3} style={style}>პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.</p><br/>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef5} style={style}>პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.</p>

                <div className="why_panorama_btn" onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
                    <img className="why_panorama_btn_icon" src={info} alt="thumbUp" />
                    <Link to='/components/AboutProject/AboutProject'><p className="why_panorama_btn_paragraph" ref={whyPanoramaParagraphRef4}>გაიგე დეტალურად პროექტის შესახებ</p></Link>
                </div>

                <Link to='/components/AboutProject/AboutProject'>
                    <div className="why_panorama_btn_responsive">
                        <p className="why_panorama_btn_paragraph_responsive" style={style}>დეტალურად</p>
                    </div>
                </Link>
            </div>

            <img className="float_cliff" src={floatClif}/>
        </div>

        <Features iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>

        <Contact iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus} styleeng={style}/>
        </>
    )
}
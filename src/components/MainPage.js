import {React, useEffect, useState, useRef} from "react";
import Flats from "./Flats/Flats";
import WhyPanorama from './whyPanorama/WhyPanorama'
import Features from "./features/Features";
import Contact from './contact/Contact'
import Footer from "./footer/Footer";

import '../styles/navbar.css'
import '../styles/slider.css'

import slider1 from '../images/slider1.svg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import logo from '../images/logo.svg'

const imgArr = [
    {
        id:1,
        image: `${slider1}`,
        text: 'თბილისის ხედი შენი ხელის გულზე'
    },
  
    {
        id:2,
        image: `${slider2}`,
        text: 'ხედი თბილისზე შენი სახლიდან'
    },
  
    {
        key:'c',
        image: `${slider3}`,
        text: 'გამოცდილებით დაგეგმილი, კრეატიულად განხორციელებული'
    },

    {
        key:'c',
        image: `${slider4}`,
        text: '88888888888888888'
    }
]

export default function MainPage() {

    const dot0 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const navbarLinkContact = useRef()
    const sliderHeaderRef = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()
    const sliderBtnRef = useRef()

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

    function nextSlide() {
        if(index === slideLength-1){
            setIndex(0)
          }else{
            setIndex(index+1)
          }
    }

    function prevSlide(){
        
        if(index === 0){
            index = setIndex(slideLength-1)
        }else{
            setIndex(index-1)
        }
    }

    function dotHandler(num){
        setIndex(num)
    }

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

            sliderHeaderRef.current.innerHTML = 'პანორამა ვარკეთილი'
            sliderBtnRef.current.innerHTML = 'დაგვირეკეთ'
            
        if(localStorage.language === 'eng'){
            setIsEng(true)
            setIsGeo(false)
            setIsRus(false)

            GeoLanguage.current.style.color = 'black'
            EngLanguage.current.style.color = '#029FA0'
            RusLanguage.current.style.color = 'black'

            navbarLinkFlats.current.innerHTML = 'Apartments'
            navbarLinkAboutUs.current.innerHTML = 'About Us'
            navbarLinkAboutProject.current.innerHTML = 'About Project'
            navbarLinkContact.current.innerHTML = 'Contact'
            sliderHeaderRef.current.innerHTML = ''
            sliderBtnRef.current.innerHTML = 'Contact Us'
            
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
            sliderHeaderRef.current.innerHTML = ''
            sliderBtnRef.current.innerHTML = ''
        }
    },[isEng, isGeo, isRus])

    useEffect(()=>{
        const sliderTimeOut = setTimeout(()=>{
            setSliderClass('slider_inner act')
        },500)

        return()=>{
            clearTimeout(sliderTimeOut)
        }
    },[])

    return(
        <>
        <div className='Navbar'>
            <img className="logo" src={logo} />

            <ul className="nav_menu">
                <li className="menu_links" ref={navbarLinkFlats}>ბინები</li>
                <li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li>
                <li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li>
                <li className="menu_links" ref={navbarLinkContact}>კონტაქტი</li>
            </ul>

            <div className="languages">
                <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
            </div>
        </div>

        <div className="slider">
            <div className={sliderClass}>
            

            {/* წერტილები */}
            <div className="dots">
                <span ref={dot0} className='dot' onClick={()=>dotHandler(0)}></span>
                <span ref={dot1} className='dot' onClick={()=>dotHandler(1)}></span>
                <span ref={dot2} className='dot' onClick={()=>dotHandler(2)}></span>
                <span ref={dot3} className='dot' onClick={()=>dotHandler(3)}></span>
            </div>

            {/* სლაიდერის სათაური */}
            <h1 className="slider_header" ref={sliderHeaderRef}>პანორამა ვარკეთილი</h1>

            <div className="slider_btn">
                <span ref={sliderBtnRef}>დაგვირეკე</span>
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

                {index === slideIndex  ? slideClass = 'slider_img slider_active' : slideClass = 'slider_img'}
                {index === slideIndex  ? textClass = 'slider_paragraph text_active' : textClass = 'slider_paragraph'}
                
                return(
                    <div key={slideIndex}>
                    <div className='mapping-div' key={slideIndex}>
                        <img  className={slideClass} src={slide.image}/>
                    </div>

                    <div>
                        <p className={textClass}>{slide.text}</p>
                    </div>
                    
                    </div>
                )
                })}
                
            </div>    
        </div>

        <Flats iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <WhyPanorama iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <Features iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <Contact iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus}/>
        </>
    )
}
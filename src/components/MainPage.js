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

    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)
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
        console.log("ქართული არის " + isGeo);
        
        if(localStorage.language === 'eng'){
            console.log("ინგლისური არის " + isEng);
        }else if(localStorage.language === 'rus'){
            console.log("რუსული არის " + isRus);
        }
    },[isEng, isGeo, isRus])

    return(
        <>
        <div className='Navbar'>
            <img className="logo" src={logo} />

            <ul className="nav_menu">
                <li className="menu_links">მთავარი</li>
                <li className="menu_links">ჩვენ შესახებ</li>
                <li className="menu_links">პროექტების შესახებ</li>
                <li className="menu_links">კონტაქტი</li>
            </ul>

            <div className="languages">
                <span className="active_language" onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span onClick={()=> makeRUS()}>RU</span>
            </div>
        </div>

        <div className="slider">

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

            {/* წერტილები */}
            <div className="dots">
                <span ref={dot0} className='dot' onClick={()=>dotHandler(0)}></span>
                <span ref={dot1} className='dot' onClick={()=>dotHandler(1)}></span>
                <span ref={dot2} className='dot' onClick={()=>dotHandler(2)}></span>
                <span ref={dot3} className='dot' onClick={()=>dotHandler(3)}></span>
            </div>

            {/* სლაიდერის სათაური */}
            <h1 className="slider_header">პანორამა ვარკეთილი</h1>

            <div className="slider_btn">
                <span>დაგვირეკე</span>
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

        <Flats />

        <WhyPanorama />

        <Features />

        <Contact />

        <Footer />
        </>
    )
}
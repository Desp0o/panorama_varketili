import {React, useEffect, useState, useRef} from "react";

import '../styles/navbar.css'
import '../styles/slider.css'

import slider1 from '../images/slider1.svg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'

const imgArr = [
    {
        id:1,
        image: `${slider1}`,
    },
  
    {
        id:2,
        image: `${slider2}`,
    },
  
    {
        key:'c',
        image: `${slider3}`  
    },

    {
        key:'c',
        image: `${slider4}`  
    }
  ]

export default function MainPage() {

    const dot0 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()

    const [dotClass, setDotClass] = useState('dot')
    const [dotNumber, setDotNumber] = useState(null)

    let [index, setIndex] = useState(0)
    const slideLength = imgArr.length

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

    return(
        <>
         <div className='Navbar'>
            <ul className="nav_menu">
                <li className="active_page">მთავარი</li>
                <li>ჩვენ შესახებ</li>
                <li>პროექტების შესახებ</li>
                <li>კონტაქტი</li>
            </ul>

            <div className="languages">
                <span className="active_language">GE</span>
                <span>/</span>
                <span>EN</span>
                <span>/</span>
                <span>RU</span>
            </div>
         </div>

         <div className="slider">

            <div className="prev_button" onClick={()=>prevSlide()}>
            <svg className="svg leftArrow" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6582 13.8254L7.6582 7.82538"  strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1.91113 1.58276L7.65826 7.8254"  strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>

            <div className="next_button" onClick={()=>nextSlide()}>
                <svg className="svg rightArrow" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6582 13.8254L7.6582 7.82538"  strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1.91113 1.58276L7.65826 7.8254"  strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>

            <div className="dots">
                <span ref={dot0} className={dotClass} onClick={()=>dotHandler(0)}></span>
                <span ref={dot1} className={dotClass} onClick={()=>dotHandler(1)}></span>
                <span ref={dot2} className={dotClass} onClick={()=>dotHandler(2)}></span>
                <span ref={dot3} className={dotClass} onClick={()=>dotHandler(3)}></span>
            </div>

         {imgArr.map((slide, slideIndex)=>{

            let slideClass = 'slide'

            {index === slideIndex  ? slideClass = 'slider_img slider_active' : slideClass = 'slider_img'}
            
            return(
                <div className='mapping-div' key={slideIndex}>
                    <img  className={slideClass} src={slide.image}/>
                </div>
            )
            })}
            
         </div>
        </>
    )
}
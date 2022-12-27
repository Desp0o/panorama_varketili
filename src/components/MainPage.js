import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';
import Flats from "./Flats/Flats";
import Features from "./features/Features";
import Contact from './contact/Contact'
import Footer from "./footer/Footer";

import '../styles/navbar.css'
import '../styles/slider.css'
import '../index.css'
import '../styles/PopUpMsg.css'
import '../styles/WhyPanorama.css'

import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import logo from '../images/logo.svg'
import xMark from '../images/close.png'
import floatClif from '../images/floatClif.png'

import callFloatBtn from '../images/callFloatBtn.png'

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
    const inputNameRef = useRef()
    const inputNumberRef = useRef()
    const inputMailRef = useRef()
    const inputSendref = useRef()
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
    const whyPanoramaBtn = useRef()

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

            // Languages
            GeoLanguage.current.style.color = '#029FA0'
            EngLanguage.current.style.color = 'black'
            RusLanguage.current.style.color = 'black'

            navbarLinkFlats.current.innerHTML = 'ბინები'
            navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
            navbarLinkAboutProject.current.innerHTML = 'პროექტების შესახებ'

            sliderHeaderRef.current.innerHTML = 'პანორამა ვარკეთილი'
            sliderBtnRef.current.innerHTML = 'დაგვირეკეთ'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = 'რატომ <br/> პანორამა ვარკეთილი?'
            whyPanoramaParagraphRef.current.innerHTML = 'პანორამა ვარკეთილი ჩვენი ახალი პროექტია, ჰუალინგ თბილისი პლაზის ახალ ქალაქში. <br/><br/>კორპუსის ძირითადი ნაწილი გარშემორტყმულია პანორამული ხედებით თბილისსა და თბილისის ზღვაზე, რომელსაც ანალოგი არ ჰყავს ქალაქის ამ ნაწილში.'
            whyPanoramaBtn.current.innerHTML = 'დაგვირეკე'
            
        if(localStorage.language === 'eng'){
            setIsEng(true)
            setIsGeo(false)
            setIsRus(false)

            // Languages
            GeoLanguage.current.style.color = 'black'
            EngLanguage.current.style.color = '#029FA0'
            RusLanguage.current.style.color = 'black'

            navbarLinkFlats.current.innerHTML = 'Apartments'
            navbarLinkAboutUs.current.innerHTML = 'About Us'
            navbarLinkAboutProject.current.innerHTML = 'About Project'
            sliderHeaderRef.current.innerHTML = ''
            sliderBtnRef.current.innerHTML = 'Contact Us'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = 'Why <br/> Panorama Varketili?'
            whyPanoramaParagraphRef.current.innerHTML =  'Experience breathtaking panoramic views of Tbilisi and the Tbilisi Sea from our new project, Panorama Varketili. Located in a vibrant and exciting part of the city, this building offers a living experience like no other'    
            whyPanoramaBtn.current.innerHTML = 'Contact Us'
            
        }else if(localStorage.language === 'rus'){
            setIsEng(false)
            setIsGeo(false)
            setIsRus(true)

            // Languages
            GeoLanguage.current.style.color = 'black'
            EngLanguage.current.style.color = 'black'
            RusLanguage.current.style.color = '#029FA0'

            navbarLinkFlats.current.innerHTML = ''
            navbarLinkAboutUs.current.innerHTML = ''
            navbarLinkAboutProject.current.innerHTML = ''
            sliderHeaderRef.current.innerHTML = ''
            sliderBtnRef.current.innerHTML = ''

            // why panorama txt
            whyPanoramaHeaderRef.current.innerHTML = ''
            whyPanoramaParagraphRef.current.innerHTML = ''
            whyPanoramaBtn.current.innerHTML = ''
        }
    },[isEng, isGeo, isRus])

   
    return(
        <>

        <div className={popUp}>
            <div className="overlay" onClick={()=>setPopUp('pop_up_msg')}></div>

            <div className="pop_up_msg_inner">

                <img src={xMark} className="xMark" alt="xmarkBtn" onClick={()=>setPopUp('pop_up_msg')}/>
                
                <h1 className="pop_up_header">დაგვიტოვე საკონტაქტო</h1>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="pop_up_msg_inner_top">
                        <input ref={inputNameRef} type="text" name="user_name" placeholder="სახელი" important="true"/>
                        <input ref={inputNumberRef} type="text" name="user_number" placeholder="ნომერი" important="true"/>
                    </div>

                    <div className="pop_up_msg_inner_middle">
                        <input ref={inputMailRef} className="email" type="email" name="user_email"  placeholder="ელ.ფოსტა" important="true"/>
                    </div>

                    <div className="pop_up_msg_inner_bottom">
                        <div className="pop_up_msg_inner_bottom submit_btn">
                            <button type="submit">
                                <span ref={inputSendref}>გაგზავნა</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        
        <div className='Navbar'>
            <img className="logo" src={logo} />

            <ul className="nav_menu">
                <Link to='./components/Apartments/Apartments'><li className="menu_links" ref={navbarLinkFlats}>ბინები</li></Link>
                <Link to='./components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li></Link>
                <Link to='./components/AboutProject/AboutProject'><li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li></Link>
                
            </ul>

            <div className="languages">
                <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
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
            <h1 className="slider_header" ref={sliderHeaderRef}>პანორამა ვარკეთილი</h1>

            <div className="slider_btn" onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
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

        <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> setPopUp('pop_up_msg pop_up_active')}
        />

        <Flats iseng={isEng} isgeo={isGeo} isrus={isRus}  />

        <div className='why_panorama' onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
            <div className="header_txt_btn">
                <h1 className="why_panorama_h1" ref={whyPanoramaHeaderRef}>რატომ <br/> პანორამა ვარკეთილი?</h1>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef}>პანორამა ვარკეთილი ჩვენი ახალი პროექტია, ჰუალინგ თბილისი პლაზის ახალ ქალაქში. <br/><br/>
                    კორპუსის ძირითადი ნაწილი გარშემორტყმულია პანორამული ხედებით თბილისსა და თბილისის ზღვაზე, 
                    რომელსაც ანალოგი არ ჰყავს ქალაქის ამ ნაწილში.
                </p>
                <div className="why_panorama_btn" onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
                    <span ref={whyPanoramaBtn}>დაგვირეკე</span>
                </div>
            </div>

            <img className="float_cliff" src={floatClif}/>
        </div>

        <Features iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <Contact iseng={isEng} isgeo={isGeo} isrus={isRus} />

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus}/>
        </>
    )
}
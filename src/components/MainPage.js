import {React, useEffect, useState, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import { overFlow, overFlowAvailable } from "./overflow";
import Flats from "./Flats/Flats";
import Features from "./features/Features";
import Contact from './contact/Contact'
import Footer from "./footer/Footer";
import Form from "./contacForm";
import PopUpModule from "./popUpModule";
import Navbar from "./navbar";
import '../styles/navbar.css'
import '../styles/slider.css'
import '../index.css'
import '../styles/PopUpMsg.css'
import '../styles/WhyPanorama.css'

import slider1 from '../images/slider1.webp'
import slider2 from '../images/slider2.webp'
import slider3 from '../images/slider3.webp'
import slider4 from '../images/slider4.webp'
import xMark from '../images/close.png'
import floatClif from '../images/floatClif.webp'
import info from '../images/info.png'

import callFloatBtn from '../images/callFloatBtn.png'
import { LangContext } from "./langContext";


const imgArr = [
    {
        id:1,
        image: `${slider1}`,
        text: 'შენს საჭირობებზე მორგებული გარემო',
        textEng: 'A customized environment that caters to your specific needs',
        textRus: 'Окружающая среда, созданная с учетом ваших потребностей'
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
        text: 'კრეატიულად განხორციელებული',
        textEng: 'Masterfully designed',
        textRus: 'Идеально спроектировано'
    },

    {
        key:'4',
        image: `${slider4}`,
        text: 'გამოცდილებით დაგეგმილი',
        textEng: 'Flawlessly implemented',
        textRus: 'безупречно реализовано'
    }
]
const styleENG={
    fontFamily: 'Roboto'
}
export default function MainPage(props) {
    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)    

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
    },)
    //End Floating Button Appear

    const dot0 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()


    const sliderHeaderRef = useRef()
    const sliderBtnRef = useRef()

    // Email send Functionality
    const [popUp, setPopUp] = useState('pop_up_msg')
    // const [modalPopUp, setModalPopUp] = useState('modal_PopUp')


    //modal timer
    // useEffect(()=>{

    //     const modalTimer = setTimeout(()=>{
    //         setModalPopUp('modal_PopUp modal_PopUp_active')
    //         overFlow()
    //         clearTimeout(modalTimer)
    //     }, 3000)

    // }, [])

    
    // End Of Email Functionality

    const whyPanoramaHeaderRef = useRef()
    const whyPanoramaParagraphRef = useRef()
    const whyPanoramaParagraphRef2 = useRef()
    const whyPanoramaParagraphRef3 = useRef()
    const whyPanoramaParagraphRef4 = useRef()
    const whyPanoramaParagraphRef5 = useRef()
    const responsiveSeeMoreBtn = useRef()


    const [sliderClass, setSliderClass] = useState('slider_inner')
    

    let [index, setIndex] = useState(0)
    const slideLength = imgArr.length


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
            setStyle(null)

            //სლაიდერის ტექსტი

            


            sliderHeaderRef.current.innerText = 'პანორამა ვარკეთილი'
            sliderBtnRef.current.innerText = 'დაგვირეკეთ'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerText = 'რატომ პანორამა ვარკეთილი?'
            whyPanoramaParagraphRef.current.innerText = 'პროექტის უნიკალურობას განაპირობებს, თბილისზე გაშლილი პანორამული ხედები.'
            whyPanoramaParagraphRef2.current.innerText = 'შენი სახლი ქალაქზე ახალი პერსპექტივითაა გარშემორტყმული,სადაც კომფორტული ცხოვრების სტილი, თანამედროვე არქიტექტურასთან და გამორჩეულ იერსახესთანაა შეხამებული.'
            whyPanoramaParagraphRef3.current.innerText = 'პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.'
            whyPanoramaParagraphRef4.current.innerText = 'გაიგე დეტალურად პროექტის შესახებ'
            whyPanoramaParagraphRef5.current.style.display = 'none'
            responsiveSeeMoreBtn.current.innerText = 'დეტალურად'

        if(localStorage.language === 'eng'){
            
            setStyle(styleENG)

           
            
            sliderHeaderRef.current.innerText = 'Panorama Varketili'
            sliderBtnRef.current.innerText = 'Contact Us'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerText = 'Why Panorama Varketili?'
            whyPanoramaParagraphRef.current.innerText =  'You’ll be surrounded by breathtaking panoramic views, making it truly one-of-a-kind!'    
            whyPanoramaParagraphRef2.current.innerText = 'These unparalleled views will give you a new perspective on the city and all it offers.'
            whyPanoramaParagraphRef3.current.innerText = "But that's not all. We believe that comfortable living and modern architecture go hand in hand, and we've designed our building with this in mind."
            whyPanoramaParagraphRef4.current.innerText = 'Learn more about the project'
            whyPanoramaParagraphRef5.current.innerText = "Our distinctive appearance and innovative approaches help us set a new standard in the synthesis of urbanization, making Panorama Varketili a truly unique place to call home."
            whyPanoramaParagraphRef5.current.style.display = 'block'
            responsiveSeeMoreBtn.current.innerText = 'See More'

        }else if(localStorage.language === 'rus'){
            setStyle(styleENG)


            sliderHeaderRef.current.innerText = 'Панорама Варкетили'
            sliderBtnRef.current.innerText = 'контакт'

            // why panorama txt
            whyPanoramaHeaderRef.current.innerText = 'Почему Панорама Варкетили?'
            whyPanoramaParagraphRef.current.innerText = 'Когда вы окажетесь здесь, вы будете окружены великолепными панорамными видами, которые позволят вам увидеть город с совершенно новой стороны.'
            whyPanoramaParagraphRef2.current.innerText = 'Однако, мы также заботимся о том, чтобы наше здание было комфортным и соответствовало современным требованиям архитектуры.'
            whyPanoramaParagraphRef3.current.innerText =  'Наш заметный внешний вид и инновационный подход помогают нам установить новые стандарты в сфере урбанизации, что делает Панорама Варкетили истинно уникальным местом, которое можно назвать домом.'
            whyPanoramaParagraphRef4.current.innerText = 'Узнать больше о проекте'
            whyPanoramaParagraphRef5.current.style.display = 'none'
            responsiveSeeMoreBtn.current.innerText = 'Подробнее'
        }
    },[isEng, isGeo, isRus])
    //*************//

    // სლაიდერის ავტომატიზაცია რესპინსივზე
    useEffect(()=>{
        let sliderInterval = null

        
            sliderInterval = setInterval(()=>{
            if(index === slideLength-1){
                setIndex(0)
              }else{
                setIndex(index+1)
              }
        },3000)
    

        return ()=>{
            clearInterval(sliderInterval)
        }
    }, [index])
    //*************//

    return(
        <>
        <Navbar/>

        {/* <div className={modalPopUp}>
            <div className="overlay" onClick={()=>{setModalPopUp('modal_PopUp'); overFlowAvailable()}}></div>
            
            <div className="form_outer">
                <img className="close" alt="close" src={xMark} onClick={()=>{setModalPopUp('modal_PopUp');overFlowAvailable()}}/>
                <PopUpModule styleeng={style}/>
            </div>
        </div> */}

        
        
        
        <div className={popUp}>
            <div className="overlay" onClick={()=>{setPopUp('pop_up_msg'); overFlowAvailable()}}></div>

            <div className="form_outer">
                <img className="close" alt="close" src={xMark} onClick={()=>{setPopUp('pop_up_msg');overFlowAvailable()}}/>
                <Form  iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus} styleeng={style}/>
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

            <div className="slider_btn" onClick={()=> {setPopUp('pop_up_msg pop_up_active'); overFlow()}}>
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

                index === slideIndex  ? slideClass = 'slider_img slider_active' : slideClass = 'slider_img'
                index === slideIndex  ? textClass = 'slider_paragraph text_active' : textClass = 'slider_paragraph'
                
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
                        <img  className={slideClass} src={slide.image} alt='slide'/>
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
            onClick={()=> {setPopUp('pop_up_msg pop_up_active'); overFlow()}}
            alt="call btn"
        />

        <Flats iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus} styleeng={style} />

        <div className='why_panorama'>
            <div className="header_txt_btn">
                <h1 className="why_panorama_h1" ref={whyPanoramaHeaderRef} style={style}>რატომ პანორამა ვარკეთილი?</h1>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef} style={style}>პროექტის უნიკალურობას განაპირობებს, თბილისზე გაშლილი პანორამული ხედები.</p>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef2} style={style}>შენი სახლი ქალაქზე ახალი პერსპექტივითაა გარშემორტყმული,სადაც კომფორტული ცხოვრების სტილი,
                 თანამედროვე არქიტექტურასთან და გამორჩეულ იერსახესთანაა შეხამებული.</p>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef3} style={style}>პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.</p>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef5} style={style}>პანორამა ვარკეთილი ახალი მიდგომებით განსხვავებულ სტანდარტს ქმნის ურბანიზაციასთან სინთეზში.</p>

                <div className="why_panorama_btn" onClick={()=> setPopUp('pop_up_msg pop_up_active')}>
                    <img className="why_panorama_btn_icon" src={info} alt="thumbUp" />
                    <Link to='/components/AboutProject/AboutProject'><p className="why_panorama_btn_paragraph" ref={whyPanoramaParagraphRef4}>გაიგე დეტალურად პროექტის შესახებ</p></Link>
                </div>

                <Link to='/components/AboutProject/AboutProject' aria-label="Read more about panorama Varketili">
                    <div className="why_panorama_btn_responsive">
                        <p className="why_panorama_btn_paragraph_responsive" ref={responsiveSeeMoreBtn} style={style}>დეტალურად</p>
                    </div>
                </Link>
            </div>

            <img className="float_cliff" src={floatClif} alt="float cliff"/>
        </div>

        <Features styleeng={style}/>

        <Contact styleeng={style}/>

        <Footer styleeng={style}/>
        </>
    )
}
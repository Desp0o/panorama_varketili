import {React, useEffect, useState, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import {overFlow, overFlowAvailable} from "../overflow"
import Navbar from "../navbar";
import '../../index.css'
import Footer from "../footer/Footer";
import'./AboutProject.css'
import line29 from '../../images/Line29.png'
import sofa from '../../images/sofa.png'
import Form from "../contacForm"

import '../../styles/PopUpMsg.css'

import callFloatBtn from '../../images/callFloatBtn.png'
import xMark from '../../images/close.png'
import toBackimg from '../../images/toBackWhite.png'
import { LangContext } from "../langContext";

const styleENG={
    fontFamily: 'Roboto'
}

export default function AboutProject(props){

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

    const [popUp, setPopUp] = useState('pop_up_msg')

    

    const [fadeOut, setFadeOut] = useState('about_proj_page')
    const [map, setMap] = useState('map')

    const februaryRef = useRef()
    const marchRef = useRef()
    const aprilRef = useRef()
    const octomberRef = useRef()


    const tobackRef = useRef()


    const circle1Ref = useRef()
    const rangeboxMarch = useRef()
    const rangeboxOctomber = useRef()

    useEffect(()=>{
        setStyle(null)

        tobackRef.current.innerText = 'უკან'

        

        februaryRef.current.innerText = 'დეკემბერი 2022'
        marchRef.current.innerText = 'იანვარი 2023'
        aprilRef.current.innerText = 'მარტი 2023'
        octomberRef.current.innerText = 'დეკემბერი 2023'

       

        firstSectionHeaderRef.current.innerText = 'ლოკაცია'
        firstSectionParagraphRef.current.innerHTML = 'პანორამა ვარკეთილი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.'
        firstSectionParagrap2hRef.current.innerText = 'ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.'

        proTimelineHeaderRef.current.innerText = 'პროექტის ვადები'
        proTimelineparagraphRef.current.innerHTML = 'ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.'
        
        projStartRef.current.innerText = 'პროექტის დაწყება'
        projFoundationRef.current.innerText = 'საძირკველი'
        rangeboxMarch.current.classList.remove('msgBox2_rus')
        rangeboxMarch.current.classList.remove('msgBox2_eng')
        projMonolitRef.current.innerHTML = 'მონოლითი'
        projMonolitRef.current.classList.remove('circle_txt3_rus')
        projBlackFrame.current.innerText = 'შავი კარკასი'
        projBlackFrame.current.classList.remove('circle_txt4_rus')
        rangeboxOctomber.current.classList.remove('msgBox4_eng')
        rangeboxOctomber.current.classList.remove('msgBox4_rus')

        ganvadebaRef.current.innerText = 'განვადება'
        ganvadebaParagraph1Ref.current.innerText = 'ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.'
        ganvadebaParagraph2Ref.current.innerText = "აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით."

    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        tobackRef.current.innerText = 'Back'

        


        februaryRef.current.innerText = 'December 2022'
        marchRef.current.innerText = 'January 2023'
        aprilRef.current.innerText = 'March 2023'
        octomberRef.current.innerText = 'December 2023'


        firstSectionHeaderRef.current.innerText = 'Location'
        firstSectionParagraphRef.current.innerHTML = 'The Panorama Varketili is located at 68 Viktor Kupradze Street, <br/> within the Hualing Tbilisi Plaza development in New City.<br/> It is conveniently located alongside the main road, offering easy access <br/>to all the amenities in the area.'
        firstSectionParagrap2hRef.current.innerText = 'Additionally, all the apartments in the project boast spectacular views.'

        proTimelineHeaderRef.current.innerText = 'Project Deadlines'
        proTimelineparagraphRef.current.innerHTML = 'The project at Varketili is set to be finished by December 2024.<br/>The apartments will be delivered in a green frame condition.'
        
        projStartRef.current.innerText = 'Project start'
        projFoundationRef.current.innerText = 'Foundation'
        rangeboxMarch.current.classList.add('msgBox2_eng')
        rangeboxMarch.current.classList.remove('msgBox2_rus')
        projMonolitRef.current.innerText = 'Monolith'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerText = 'Black Frame'
        projBlackFrame.current.classList.remove('circle_txt4_rus')
        rangeboxOctomber.current.classList.add('msgBox4_eng')
        rangeboxOctomber.current.classList.remove('msgBox4_rus')


        ganvadebaRef.current.innerText = 'Installment'
        ganvadebaParagraph1Ref.current.innerText = 'The option of domestic 2-year interest-free installment plans is available for the purchase of apartments.'
        ganvadebaParagraph2Ref.current.innerText = "The bank's 5-10 year mortgage loan is also available."

    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        tobackRef.current.innerText = 'Назад'

        


        februaryRef.current.innerText = 'Декабрь 2022'
        marchRef.current.innerText = 'январь 2023'
        aprilRef.current.innerText = 'Март 2023'
        octomberRef.current.innerText = 'Декабрь 2023'

        

        firstSectionHeaderRef.current.innerText = 'место нахождения'
        firstSectionParagraphRef.current.innerHTML = 'Панорама Варкетили расположен на улице Виктора Купрадзе 68, <br/> в развитии Hualing Tbilisi Plaza в Новом Городе.<br/>Он удобно расположен на боку основной дороги,<br/>предлагая легкий доступ ко всем удобствам в этом районе.'
        firstSectionParagrap2hRef.current.innerText = 'Кроме того, все квартиры в проекте имеют лучшие виды.'

        proTimelineHeaderRef.current.innerText = 'Сроки проекта'
        proTimelineparagraphRef.current.innerHTML = 'Проект в Варкетили запланирован к завершению к декабрю 2024 года.<br/>Квартиры будут переданы в зеленом каркасном состоянии.'
    
        projStartRef.current.innerText = 'Запуск проекта'
        projFoundationRef.current.innerText = 'Фундамент'
        rangeboxMarch.current.classList.add('msgBox2_rus')
        rangeboxMarch.current.classList.remove('msgBox2_eng')
        projMonolitRef.current.innerText = 'монолит'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerText = 'Черный каркас'   
        projBlackFrame.current.classList.add('circle_txt4_rus')
        rangeboxOctomber.current.classList.remove('msgBox4_eng')
        rangeboxOctomber.current.classList.add('msgBox4_rus')

        ganvadebaRef.current.innerText = 'Рассрочка'
        ganvadebaParagraph1Ref.current.innerText = 'Возможность использования домашних беспроцентных инсталляционных планов на 2 года доступна для покупки квартир.'
        ganvadebaParagraph2Ref.current.innerText = 'И доступна ипотечная займ на период от 5 до 10 лет от банка.'

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
            <Navbar activeProj="active_page"/>

            <div className={popUp}>
                <div className="overlay" onClick={()=>{setPopUp('pop_up_msg'); overFlowAvailable()}}></div>

                <div className="form_outer">
                    <img className="close" alt="close" src={xMark} onClick={()=>{setPopUp('pop_up_msg');overFlowAvailable()}}/>
                    <Form iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus} styleeng={style} />
                </div>
            </div>

            <img 
            src={callFloatBtn} 
            ref={floatButtonRef} 
            className={floatBtnClass} 
            onClick={()=> {setPopUp('pop_up_msg pop_up_active'); overFlow()}}
            alt='call btn'
            />

            <div className={fadeOut}>
                <h1 className="about_proj_page_header" ref={firstSectionHeaderRef} style={style}>ლოკაცია</h1>
                <p className="about_proj_page_p" ref={firstSectionParagraphRef} style={style}>ვარკეთილის პროექტი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.</p>
                <p className="about_proj_page_p second_p" ref={firstSectionParagrap2hRef} style={style}> ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.</p>
            </div>

            <div className={map} ref={scrollRef}>
                <iframe title="twins location" className="map_frame" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2978.4605899360718!2d44.873343999999996!3d41.710578999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQyJzM4LjEiTiA0NMKwNTInMjQuMCJF!5e0!3m2!1ska!2sge!4v1681971986476!5m2!1ska!2sge" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>

            <div className="to_back about_proj_to_back">
                        <img src={toBackimg} alt="back arrow " />
                        <Link to='/components/MainPage'><p style={style} ref={tobackRef}>უკან</p></Link>
            </div>

            <div className="project_timeline_txt">
                <h2 ref={proTimelineHeaderRef} style={style}>პროექტის ვადები</h2>
                <p ref={proTimelineparagraphRef} style={style}>ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.</p>
            </div>

            <div className="rangesDiv respHidden">

                <span ref={circle1Ref} className="circle1"><img className="line1" src={line29} alt='line'/></span>
                    <p className="circleTXT circle_txt1" style={style} ref={projStartRef}>პროექტის დაწყება</p>
                    <div className="range_msg_box msgBox1"><p className="msgBoxText" ref={februaryRef} style={style}>დეკემბერი 2022</p></div>
                

                <span className="circle2"><img className="line2" src={line29} alt='line'/></span>
                    <p className="circleTXT circle_txt2" style={style} ref={projFoundationRef}>საძირკველი</p>
                    <div ref={rangeboxMarch} className="range_msg_box msgBox2"><p className="msgBoxText" ref={marchRef} style={style}>იანვარი 2023</p></div>
                

                <span className="circle3"><img className="line3" src={line29} alt='line'/></span>
                    <p className="circleTXT circle_txt3 circle_txt3_rus" style={style} ref={projMonolitRef}>მონოლითი</p>
                    <div className="range_msg_box msgBox3"><p className="msgBoxText" ref={aprilRef} style={style}>აპრილი 2023</p></div>


                <span className="circle4"><img className="line4" src={line29} alt='line'/></span>
                    <p className="circleTXT circle_txt4" style={style} ref={projBlackFrame}>შავი კარკასი</p>
                    <div ref={rangeboxOctomber} className="range_msg_box msgBox4"><p className="msgBoxText" ref={octomberRef} style={style}>დეკემბერი 2023</p></div>

                <input className="backRange" type='range' min='0' max='0' step='1' disabled/>
                {/* <input ref={rangeThumbRef} className="inputRange" type='range' min='0' max='300' step='1' value={data} onChange={(e)=> setData(e.target.value)} /> */}
                
            </div>

            <div className="ganvadeba">
                <h2 ref={ganvadebaRef} style={style}>განვადება</h2>


                <div className="ganvadeba_inner">
                    <div className="ganvadeba_left">
                        
                        <p  ref={ganvadebaParagraph1Ref} style={style}>ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.</p>
                        <p id="para" ref={ganvadebaParagraph2Ref} style={style}>აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით.</p>
                    </div>

                    <div className="ganvadeba_right">
                        <img src={sofa} alt="sofa"/>
                    </div>
                </div>

            </div>
            <Footer styleeng={style}/>
        </>
    )
}
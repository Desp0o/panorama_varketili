import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
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

const styleENG={
    fontFamily: 'Roboto'
}

export default function AboutProject(props){

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

        tobackRef.current.innerHTML = 'უკან'

        

        februaryRef.current.innerHTML = 'თებერვალი 2023'
        marchRef.current.innerHTML = 'მარტი 2023'
        aprilRef.current.innerHTML = 'აპრილი 2023'
        octomberRef.current.innerHTML = 'ოქტომბერი 2023'

       

        firstSectionHeaderRef.current.innerHTML = 'ლოკაცია'
        firstSectionParagraphRef.current.innerHTML = 'პანორამა ვარკეთილი მდებარეობს ვიქტორ კუპრაძის 68<br/> ნომერში, ჰუალინგ თბილისი პლაზას ახალ ქალაქში,<br/> ცენტრალური გზის პირას.'
        firstSectionParagrap2hRef.current.innerHTML = 'ჩვენი პროექტის ყველა ბინას აქვს საუკეთესო ხედები.'

        proTimelineHeaderRef.current.innerHTML = 'პროექტის ვადები'
        proTimelineparagraphRef.current.innerHTML = 'ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.'
        
        projStartRef.current.innerHTML = 'პროექტის დაწყება'
        projFoundationRef.current.innerHTML = 'საძირკველი'
        rangeboxMarch.current.classList.remove('msgBox2_rus')
        rangeboxMarch.current.classList.remove('msgBox2_eng')
        projMonolitRef.current.innerHTML = 'მონოლითი'
        projMonolitRef.current.classList.remove('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'შავი კარკასი'
        projBlackFrame.current.classList.remove('circle_txt4_rus')
        rangeboxOctomber.current.classList.remove('msgBox4_eng')
        rangeboxOctomber.current.classList.remove('msgBox4_rus')

        ganvadebaRef.current.innerHTML = 'განვადება'
        ganvadebaParagraph1Ref.current.innerHTML = 'ბინების შესაძენად მოქმედებს შიდა 2 წლიანი უპროცენტო განვადება.'
        ganvadebaParagraph2Ref.current.innerHTML = "აგრეთვე მოქმედებს ბანკის იპოთეკური სესხი 5-10 წლამდე ვადით."

    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        tobackRef.current.innerHTML = 'Back'

        


        februaryRef.current.innerHTML = 'February 2023'
        marchRef.current.innerHTML = 'March 2023'
        aprilRef.current.innerHTML = 'April 2023'
        octomberRef.current.innerHTML = 'Octomber 2023'


        firstSectionHeaderRef.current.innerHTML = 'Location'
        firstSectionParagraphRef.current.innerHTML = 'The Panorama Varketili is located at 68 Viktor Kupradze Street, <br/> within the Hualing Tbilisi Plaza development in New City.<br/> It is conveniently located alongside the main road, offering easy access <br/>to all the amenities in the area.'
        firstSectionParagrap2hRef.current.innerHTML = 'Additionally, all the apartments in the project boast spectacular views.'

        proTimelineHeaderRef.current.innerHTML = 'Project Deadlines'
        proTimelineparagraphRef.current.innerHTML = 'The project at Varketili is set to be finished by December 2024.<br/>The apartments will be delivered in a green frame condition.'
        
        projStartRef.current.innerHTML = 'Project start'
        projFoundationRef.current.innerHTML = 'Foundation'
        rangeboxMarch.current.classList.add('msgBox2_eng')
        rangeboxMarch.current.classList.remove('msgBox2_rus')
        projMonolitRef.current.innerHTML = 'Monolith'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'Black Frame'
        projBlackFrame.current.classList.remove('circle_txt4_rus')
        rangeboxOctomber.current.classList.add('msgBox4_eng')
        rangeboxOctomber.current.classList.remove('msgBox4_rus')


        ganvadebaRef.current.innerHTML = 'Installment'
        ganvadebaParagraph1Ref.current.innerHTML = 'The option of domestic 2-year interest-free installment plans is available for the purchase of apartments.'
        ganvadebaParagraph2Ref.current.innerHTML = "The bank's 5-10 year mortgage loan is also available."

    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        tobackRef.current.innerHTML = 'Назад'

        


        februaryRef.current.innerHTML = 'Февраль 2023'
        marchRef.current.innerHTML = 'Mарт 2023'
        aprilRef.current.innerHTML = 'Aпреля 2023'
        octomberRef.current.innerHTML = 'Октябрь 2023'

        

        firstSectionHeaderRef.current.innerHTML = 'место нахождения'
        firstSectionParagraphRef.current.innerHTML = 'Панорама Варкетили расположен на улице Виктора Купрадзе 68, <br/> в развитии Hualing Tbilisi Plaza в Новом Городе.<br/>Он удобно расположен на боку основной дороги,<br/>предлагая легкий доступ ко всем удобствам в этом районе.'
        firstSectionParagrap2hRef.current.innerHTML = 'Кроме того, все квартиры в проекте имеют лучшие виды.'

        proTimelineHeaderRef.current.innerHTML = 'Сроки проекта'
        proTimelineparagraphRef.current.innerHTML = 'Проект в Варкетили запланирован к завершению к декабрю 2024 года.<br/>Квартиры будут переданы в зеленом каркасном состоянии.'
    
        projStartRef.current.innerHTML = 'Запуск проекта'
        projFoundationRef.current.innerHTML = 'Фундамент'
        rangeboxMarch.current.classList.add('msgBox2_rus')
        rangeboxMarch.current.classList.remove('msgBox2_eng')
        projMonolitRef.current.innerHTML = 'монолит'
        projMonolitRef.current.classList.add('circle_txt3_rus')
        projBlackFrame.current.innerHTML = 'Черный каркас'   
        projBlackFrame.current.classList.add('circle_txt4_rus')
        rangeboxOctomber.current.classList.remove('msgBox4_eng')
        rangeboxOctomber.current.classList.add('msgBox4_rus')

        ganvadebaRef.current.innerHTML = 'Рассрочка'
        ganvadebaParagraph1Ref.current.innerHTML = 'Возможность использования домашних беспроцентных инсталляционных планов на 2 года доступна для покупки квартир.'
        ganvadebaParagraph2Ref.current.innerHTML = 'И доступна ипотечная займ на период от 5 до 10 лет от банка.'

    }
    },[props.isEng, props.isGeo, props.isRus])
    
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

            <div className={popUp}>
                <div className="overlay" onClick={()=>setPopUp('pop_up_msg')}></div>

                <div className="form_outer">
                    <img className="close" alt="close" src={xMark} onClick={()=>setPopUp('pop_up_msg')}/>
                    <Form iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus} styleeng={style} />
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
                        <img src={toBackimg} alt="back arrow " />
                        <Link to='/components/MainPage'><p style={style} ref={tobackRef}>უკან</p></Link>
            </div>

            <div className="project_timeline_txt">
                <h2 ref={proTimelineHeaderRef} style={style}>პროექტის ვადები</h2>
                <p ref={proTimelineparagraphRef} style={style}>ვარკეთილის მიმდინარე პროექტი დასრულდება 2024 წლის დეკემბერში.<br/> ბინები ბარდება მწვანე კარკასის კონდიციით.</p>
            </div>

            <div className="rangesDiv">

                <span ref={circle1Ref} className="circle1"><img className="line1" src={line29}/></span>
                    <p className="circleTXT circle_txt1" style={style} ref={projStartRef}>პროექტის დაწყება</p>
                    <div className="range_msg_box msgBox1"><p className="msgBoxText" ref={februaryRef} style={style}>თებერვალი 2023</p></div>
                

                <span className="circle2"><img className="line2" src={line29}/></span>
                    <p className="circleTXT circle_txt2" style={style} ref={projFoundationRef}>საძირკველი</p>
                    <div ref={rangeboxMarch} className="range_msg_box msgBox2"><p className="msgBoxText" ref={marchRef} style={style}>მარტი 2023</p></div>
                

                <span className="circle3"><img className="line3" src={line29}/></span>
                    <p className="circleTXT circle_txt3 circle_txt3_rus" style={style} ref={projMonolitRef}>მონოლითი</p>
                    <div className="range_msg_box msgBox3"><p className="msgBoxText" ref={aprilRef} style={style}>აპრილი 2023</p></div>


                <span className="circle4"><img className="line4" src={line29}/></span>
                    <p className="circleTXT circle_txt4" style={style} ref={projBlackFrame}>შავი კარკასი</p>
                    <div ref={rangeboxOctomber} className="range_msg_box msgBox4"><p className="msgBoxText" ref={octomberRef} style={style}>ოქტომბერი 2023</p></div>

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
            <Footer iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus} styleeng={style}/>
        </>
    )
}
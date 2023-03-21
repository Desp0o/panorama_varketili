import {React, useEffect, useState, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import Navbar from '../navbar'
import aboutimage from '../../images/aboutimage.png'
import '../../styles/navbar.css'
import toBackimg from '../../images/toback.png'

import Footer from '../footer/Footer'

import './AboutUsPage.css'
import { LangContext } from "../langContext";

const styleENG={
    fontFamily: 'Roboto'
}

export default function AboutUsPage(props){

    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)  

    const aboutPageHeader = useRef()
    const aboutPageP2 = useRef()
    const aboutPageP3 = useRef()
    const aboutPageP4 = useRef()
    const aboutPageP5 = useRef()
    const geoListRef = useRef()
    const engListRef = useRef()
    const rusListRef = useRef()

    const geoTwinsWord = useRef()
    const engTwinsWord = useRef()
    const rusTwinsWord = useRef()

    const toBack = useRef()

    const [style, setStyle] = useState(styleENG)

    useEffect(()=>{
        setStyle(null)

        aboutPageHeader.current.innerText = 'თვინს დეველოპმენტი'
        toBack.current.innerText = 'უკან'
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'none'
        geoListRef.current.style.display = 'block'
        geoTwinsWord.current.style.display = 'block'
        engTwinsWord.current.style.display = 'none'
        rusTwinsWord.current.style.display = 'none'
        aboutPageP2.current.innerText = 'ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.'
        aboutPageP3.current.innerText = 'ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან.'
        aboutPageP4.current.innerText = 'თვინს დეველოპმენტი საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.'
        aboutPageP5.current.style.display = 'none'

    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        engListRef.current.style.display = 'block'
        rusListRef.current.style.display = 'none'
        geoListRef.current.style.display = 'none'
        aboutPageHeader.current.innerText = 'Twins Development'
        toBack.current.innerText = 'Back'
        geoTwinsWord.current.style.display = 'none'
        engTwinsWord.current.style.display = 'block'
        rusTwinsWord.current.style.display = 'none'
        aboutPageP2.current.innerText = 'With decades of experience and a keen eye for the best locations, our team is dedicated to making comfortable living accessible to all. '
        aboutPageP3.current.innerText = 'are our top priorities, and it\'s this commitment to detail that has earned us the trust of our customers. '
        aboutPageP4.current.innerText = 'We pride ourselves on creating projects that seamlessly blend architecture and urbanization, making a positive impact on the appearance of the city.'
        aboutPageP5.current.style.display = 'block'
        aboutPageP5.current.innerText = 'With Twins Development, you can trust that you are getting the best the industry has to offer.'

    
    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        aboutPageHeader.current.innerText = 'Твинс Девелопмент'
        toBack.current.innerText = 'назад'
        geoTwinsWord.current.style.display = 'none'
        engTwinsWord.current.style.display = 'none'
        rusTwinsWord.current.style.display = 'block'
        engListRef.current.style.display = 'none'
        rusListRef.current.style.display = 'block'
        geoListRef.current.style.display = 'none'
        aboutPageP2.current.innerText = 'Наша команда, обладающая многолетним опытом и хорошим взглядом на ситуацию, стремится сделать комфортную жизнь доступной для всех.'
        aboutPageP3.current.innerText = 'Безопасность и профессионализм являются нашими главными приоритетами, и именно это внимание к деталям заслужило нам доверие наших клиентов.'
        aboutPageP4.current.innerText = 'Мы гордимся тем, что создаем проекты, которые сочетают архитектуру и урбанизацию органично, внося свой вклад в внешний вид города.'
        aboutPageP5.current.style.display = 'block'
        aboutPageP5.current.innerText = 'С Твинс Девелопмент вы можете быть уверены, что получите самое лучшее, что может предложить отрасль.'
    
    }
    },[isEng, isGeo, isRus])


    return(
        <>
            <Navbar activeAbout="active_page"/>

            <div className="to_back about_to_back">
                    <img src={toBackimg} alt="back arrow" />
                        <Link to='/components/MainPage'><p style={style} ref={toBack}>უკან</p></Link>
            </div>

            <div className="about_inner">

                <div className="about_inner_left">
                    <h1 ref={aboutPageHeader} className="about_us_header" style={style}>თვინს დეველოპმენტი</h1>
                    
                    <div className="about_inner_left_texts" style={null}>
                        <p ref={geoTwinsWord}> თვინს დეველოპმენტი მრავალი წელია საქართველოს ბაზარზე, გამორჩეულ პროექტებს ქმნის.</p>
                        <p ref={engTwinsWord} style={style}> For years, Twins Development has been setting the standard for excellence in the Georgian market with</p>
                        <p ref={rusTwinsWord} style={style}>Компания Твинс Девелопмент на грузинском рынке уже много лет устанавливает стандарты качества:</p>


                        <ul ref={geoListRef}>
                            <li className="about_us_list">გამორჩეული სტილი</li>
                            <li className="about_us_list">ინოვაციური მიდგომები</li>
                            <li className="about_us_list">პრემიუმ ხარისხის სამშენებლო მასალები</li>
                            <li className="about_us_list">მრავაწლიანი გამოცდილება</li>
                            <li className="about_us_list">საუკეთესო ლოკაციები</li>
                        </ul>

                        <ul ref={engListRef} style={style}>
                            <li className="about_us_list">distinctive style</li>
                            <li className="about_us_list">innovative approaches</li>
                            <li className="about_us_list">premium quality building materials</li>
                        </ul>

                        <ul ref={rusListRef}>
                            <li className="about_us_list">уникальный стиль</li>
                            <li className="about_us_list">инновационные подходы</li>
                            <li className="about_us_list">высококачественные строительные материалы</li>
                        </ul>

                        <p ref={aboutPageP2} style={style}>ჩვენი გუნდი შესაძლებელს ხდის, კომფორტული ცხოვრების სტილი, ნებისმიერი ადამიანისთვის ხელმისაწვდომი გახადოს.</p>

                        <p ref={aboutPageP3} style={style}>ობიექტზე უსაფრთხოების წესებისა და ნორმების სრული დაცვით, სამუშაოს პროფესიონალურად შესრულება ჩვენი მთავარი პრიორიტეტია. სწორედ საქმისადმი მსგავსი დამოკიდებულების და დეტალებზე მაქსიმალური ყურადღების გამო გვაქვს მაღალი ნდობა ჩვენი მომხმარებლისგან. </p>

                        <p ref={aboutPageP4} style={style}>Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.</p>
                        
                        <p ref={aboutPageP5} style={style}>Twins Development საუკეთესო პრაქტიკებზე დაყრდნობით, ქმნის პროექტებს, რომელიც ქალაქის იერსახეს, არქიტექტურისა და ურბანიზაციის სინთეზის გამორჩეულ მაგალითად აქცევს.</p>
                    </div>
                </div>

                <div className="about_inner_right">
                    <div className="aboutImage">
                        <img src={aboutimage} alt='about page'/>
                    </div>
                </div>

            </div>

            
            <Footer styleeng={style}/>
        
        </>
    )
}









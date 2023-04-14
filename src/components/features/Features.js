import {React, useEffect, useState, useRef, useContext} from "react";

import FeatureBg from '../../images/FeatureBg.webp'
import { LangContext } from "../langContext";
import './Features.css'

export default function Features(props) {
    const [expand, setExpand] = useState(null)

    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)

    const featuresHeaderRef = useRef()

    const txt1 = useRef()
    const txt2 = useRef()
    const txt3 = useRef()
    const txt4 = useRef()
    const txt5 = useRef()
    const txt6 = useRef()
    const txt7 = useRef()

    useEffect(()=>{
        featuresHeaderRef.current.innerText = 'უპირატესობები'

        txt1.current.innerText = "800 კვ.მ გამწვანება"
        txt2.current.innerText = "მიწისქვეშა და მიწისზედა პარკინგი"
        txt3.current.innerText = "დაცვისა და უსაფრთხოების სისტემები"
        txt4.current.innerText = "2000კვმ კომერციული და საოფისე ფართები (სასურსათო მაღაზიები, ბანკი, აფთიაქი...)"
        txt5.current.innerText = "ბინების რემონტის სერვისი"
        txt6.current.innerText = "ხანძარსაწინააღმდეგო სისტემები"
        txt7.current.innerText = "მაღალხარისხიანი სამგზავრო ლიფტები"
    if(localStorage.language === 'eng'){
        featuresHeaderRef.current.innerText = 'Advantages'
        txt1.current.innerText = "800 square meters of lush greenery, providing a serene and refreshing atmosphere"
        txt2.current.innerText = "Ample parking options with both underground and surface parking available"
        txt3.current.innerText = "Comprehensive protection and security systems"
        txt4.current.innerText = "A vast expanse of 2000 square meters dedicated to commercial and office spaces, including grocery stores, banks, and pharmacies, among others"
        txt5.current.innerText = "Convenient apartment repair service"
        txt6.current.innerText = "Fire protection systems"
        txt7.current.innerText = "High-quality passenger elevators"
        
    }else if(localStorage.language === 'rus'){
        featuresHeaderRef.current.innerText = 'Преимущества'
        txt1.current.innerText = "800 квадратных метров зелени"
        txt2.current.innerText = "Подземная и наземная парковки"
        txt3.current.innerText = "Системы защиты и безопасности"
        txt4.current.innerText = "2000 квадратных метров коммерческих и офисных помещений (магазины, банки, аптеки и т.д.)"
        txt5.current.innerText = "Сервис по ремонту квартир"
        txt6.current.innerText = "Системы противопожарной защиты"
        txt7.current.innerText = "Качественные пассажирские лифты"
    }
},[isEng, isGeo, isRus])

    return(
        <div className="features">
            <p ref={featuresHeaderRef} className="features_header" style={props.styleeng}>უპირატესობები</p>

            <div className="feature_bg">
                <img src={FeatureBg} alt='FeatureBg' onClick={()=> {setExpand(null)}}/>

                {/* მეორე მესიჯბოქსი */}
                
                {/* ********************** */}

                {/* 111111111 */}
                <div className="expandMSG firstMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 1){
                            setExpand(null)
                        }else{
                            setExpand(1)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>

                    
                </div>

                <div className="parent1">
                    <div className={expand === 1 ? "messagebox activeMSG activeMSG1" : "messagebox activeMSG1"}>
                        <p ref={txt1} className={expand === 1 ? "msgText1 activeTXT" : "msgText1"} style={props.styleeng}>100 კვ.მ გამწვანება</p>
                    </div>
                </div>
                {/* ************** */}


                {/* 2222222222 */}
                <div className="expandMSG secondMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 2){
                            setExpand(null)
                        }else{
                            setExpand(2)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent2">
                    <div className={expand === 2 ? "messagebox activeMSG activeMSG2 responsiveText" : "messagebox activeMSG2"}>
                        <p ref={txt2} className={expand === 2 ? "msgText2 activeTXT" : "msgText2"} style={props.styleeng}>მიწისქვეშა და მიწისზედა პარკინგი</p>
                    </div>
                </div>
                {/* ********** */}

                
                {/* 33333 */}
                <div className="expandMSG thirdMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 3){
                            setExpand(null)
                        }else{
                            setExpand(3)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent3">
                    <div className={expand === 3 ? "messagebox activeMSG activeMSG2" : "messagebox activeMSG2"}>
                        <p ref={txt3} className={expand === 3 ? "msgText3 activeTXT" : "msgText3"} style={props.styleeng}>დაცვისა და უსაფრთხოების სისტემები</p>
                    </div>
                </div>
                {/* ********* */}

                {/* 44444 */}
                <div className="expandMSG fourthdMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 4){
                            setExpand(null)
                        }else{
                            setExpand(4)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent4">
                    <div className={expand === 4 ? "messagebox activeMSG" : "messagebox"}>
                        <p ref={txt4} className={expand === 4 ? "msgText4 activeTXT" : "msgText4"} style={props.styleeng}>2000კვმ კომერციული და საოფისე ფართები (სასურსათო მაღაზიები, ბანკი, აფთიაქი...)</p>
                    </div>
                </div>


                {/* 5555 */}
                <div className="expandMSG fifthdMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 5){
                            setExpand(null)
                        }else{
                            setExpand(5)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent5">
                    <div className={expand === 5 ? "messagebox activeMSG activeMSG2" : "messagebox activeMSG2"}>
                        <p ref={txt5} className={expand === 5 ? "msgText5 activeTXT" : "msgText5"} style={props.styleeng}>ბინების რემონტის სერვისი</p>
                    </div>
                </div>


                {/* 6666 */}
                <div className="expandMSG sixthdMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 6){
                            setExpand(null)
                        }else{
                            setExpand(6)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent6">
                    <div className={expand === 6 ? "messagebox activeMSG activeMSG2" : "messagebox activeMSG2"}>
                        <p ref={txt6} className={expand === 6 ? "msgText6 activeTXT" : "msgText6"} style={props.styleeng}>ხანძარსაწინააღმდეგო სისტემები</p>
                    </div>
                </div>


                {/* 777 */}
                <div className="expandMSG seventhMSG">
                    <svg 
                    onClick={()=>{
                        if(expand === 7){
                            setExpand(null)
                        }else{
                            setExpand(7)
                        }
                    }}
                    className="svgExpand" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9814 37.8544C29.4646 37.8544 37.9629 29.3804 37.9629 18.9272C37.9629 8.47399 29.4646 0 18.9814 0C8.49828 0 0 8.47399 0 18.9272C0 29.3804 8.49828 37.8544 18.9814 37.8544Z" fill="#029FA0"/>
                        <path d="M17.4961 25.4551V19.5664H11.6514V17.1055H17.4961V11.2607H19.9863V17.1055H25.8311V19.5664H19.9863V25.4551H17.4961Z" fill="white"/>
                    </svg>
                </div>

                <div className="parent7">
                    <div className={expand === 7 ? "messagebox activeMSG activeMSG2 responsiveText" : "messagebox activeMSG2 responsiveText"}>
                        <p ref={txt7} className={expand === 7 ? "msgText7 activeTXT" : "msgText7"} style={props.styleeng}>მაღალხარისხიანი სამგზავრო ლიფტები</p>
                    </div>
                </div>

                <div className="my-div"></div>
                

            </div>
        </div>
    )
}
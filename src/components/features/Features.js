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

    useEffect(()=>{
        featuresHeaderRef.current.innerText = 'უპირატესობები'
    if(localStorage.language === 'eng'){
        featuresHeaderRef.current.innerText = 'Advantages'
        
    }else if(localStorage.language === 'rus'){
        featuresHeaderRef.current.innerText = 'Преимущества'
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
                        <p className={expand === 1 ? "msgText1 activeTXT" : "msgText1"}>100 კვ.მ გამწვანება</p>
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
                        <p className={expand === 2 ? "msgText2 activeTXT" : "msgText2"}>მიწისქვეშა და მიწისზედა პარკინგი</p>
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
                        <p className={expand === 3 ? "msgText3 activeTXT" : "msgText3"}>დაცვისა და უსაფრთხოების სისტემები</p>
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
                        <p className={expand === 4 ? "msgText4 activeTXT" : "msgText4"}>2000კვმ კომერციული და საოფისე ფართები (სასურსათო მაღაზიები, ბანკი, აფთიაქი...)</p>
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
                        <p className={expand === 5 ? "msgText5 activeTXT" : "msgText5"}>ბინების რემონტის სერვისი</p>
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
                        <p className={expand === 6 ? "msgText6 activeTXT" : "msgText6"}>ხანძარსაწინააღმდეგო სისტემები</p>
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
                        <p className={expand === 7 ? "msgText7 activeTXT" : "msgText7"}>მაღალხარისხიანი სამგზავრო ლიფტები</p>
                    </div>
                </div>

                <div className="my-div"></div>
                

            </div>
        </div>
    )
}
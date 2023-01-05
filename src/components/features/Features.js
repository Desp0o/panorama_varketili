import {React, useEffect, useState, useRef} from "react";

import FeatureBg from '../../images/FeatureBg.webp'
import './Features.css'

export default function Features() {
    const [expand, setExpand] = useState(null)

    return(
        <div className="features">
            <p className="features_header">უპირატესობები</p>

            <div className="feature_bg">
                <img src={FeatureBg} />

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

                    <div className={expand === 2 ? "messagebox activeMSG" : "messagebox"}>
                        pppppppppp
                    </div>
                </div>
                

            </div>
        </div>
    )
}
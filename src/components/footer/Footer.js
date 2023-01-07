import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import './Footer.css'

import facebook from '../../images/facebook.png'

export default function Footer(props){
    const geoRuningText = useRef()
    const engRuningText = useRef()
    const rusRuningText = useRef()

    const calculateTimeLeft = () => {
        const difference = +new Date("2023-12-28T00:00:00+04:00") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }

        return timeLeft;
      };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    if(timeLeft.days<10){
        timeLeft.days='0'+timeLeft.days
    }

    useEffect(()=>{
        geoRuningText.current.style. display = "flex"
        engRuningText.current.style. display = "none"
        rusRuningText.current.style. display = "none"
        

        if(localStorage.language === 'eng'){
            geoRuningText.current.style. display = "none"
            engRuningText.current.style. display = "flex"
            rusRuningText.current.style. display = "none"
            
        
        }else if(localStorage.language === 'rus'){
            geoRuningText.current.style. display = "none"
            engRuningText.current.style. display = "none"
            rusRuningText.current.style. display = "flex"
        
        }

    },[props.iseng, props.isrus, props.isgeo])

    return(
        
        <div className="footer">

            <div className="running_text_outter">
                <div ref={geoRuningText}>
                    <div className="running_text">
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1>დასრულებამდე დარჩა <span> {timeLeft.days} </span> დღე</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                    </div>
                </div>

                <div ref={engRuningText}>
                    <div className="running_text">
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                    </div>
                </div>

                <div ref={rusRuningText}>
                    <div className="running_text">
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                        <h1><span>{timeLeft.days} </span>days remaining until completion.</h1>
                        <h1>დარჩენილია 54 ბინა</h1>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="footer_bottom_icons">
                    <img className="footer_icon" src={facebook} alt="footer social icon"/>
                    <img className="footer_icon" src={facebook} alt="footer social icon"/>
                    <img className="footer_icon" src={facebook} alt="footer social icon"/>
                    <img className="footer_icon" src={facebook} alt="footer social icon"/>
                </div>

                <div className="footer_bottom_number_adrees">
                    <p className="footer_number">0322 73 24 19</p>
                    <p className="footer_adress">გაყიდვების ოფისი-მისამართი</p>
                </div>

                <div className="footer_bottom_rights">
                    <p className="copyright">© 2023 Twins Development</p>
                </div>

                
            </div>

            

            
        </div>
    )
}
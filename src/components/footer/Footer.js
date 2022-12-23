import {React, useEffect, useState, useRef} from "react";
import './Footer.css'


export default function Footer(){

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

    return(
        <div className="footer">
            <div className="running_text">
                <h1>დასრულებამდე დარჩა <span>{timeLeft.days}</span> დღე</h1>
                <h1>დარჩენილია 54 ბინა</h1>
                <h1>დასრულებამდე დარჩა <span>{timeLeft.days}</span> დღე</h1>
                <h1>დარჩენილია 54 ბინა</h1>
                <h1>დასრულებამდე დარჩა <span>{timeLeft.days}</span> დღე</h1>
                <h1>დარჩენილია 54 ბინა</h1>
                <h1>დასრულებამდე დარჩა <span>{timeLeft.days}</span> დღე</h1>
                <h1>დარჩენილია 54 ბინა</h1>
            </div>

            <div className="footer_bottom">
                <div className="footer_bottom_links">
                    <ul>
                        <li>ჩვენ შესახებ</li>
                        <li>პროექტი</li>
                        <li>ბინები</li>
                    </ul>

                    <ul>
                        <li>სოციალური მედია</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>

                    <ul>
                        <li>კონტაქტი</li>
                        <li>592 23 43 22</li>
                    </ul>

                </div>

                <div className="footer_bottom_right">
                    <p>(c) თვინს დეველოპმენტი</p>
                </div>
            </div>
        </div>
    )
}
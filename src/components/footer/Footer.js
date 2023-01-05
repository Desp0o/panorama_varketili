import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import './Footer.css'
import lage from '../aboutUsPage/AboutUsPage'

import footerInsta from '../../images/responsiveInsta.png'

export default function Footer(props){
    const geoRuningText = useRef()
    const engRuningText = useRef()
    const rusRuningText = useRef()
    const footerLinkAboutUs = useRef()
    const footerLinkProjects = useRef()
    const footerLinkApartments = useRef()
    const footerLinkSocialMedia = useRef()
    const footerLinkContact = useRef()
    const twinsC = useRef()

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
        footerLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        footerLinkProjects.current.innerHTML = 'პროექტი'
        footerLinkApartments.current.innerHTML = 'ბინები'
        footerLinkSocialMedia.current.innerHTML = 'სოციალური მედია'
        footerLinkContact.current.innerHTML = 'კონტაქტი'
        twinsC.current.innerHTML = '(c) თვინს დეველოპმენტი'

        if(localStorage.language === 'eng'){
            geoRuningText.current.style. display = "none"
            engRuningText.current.style. display = "flex"
            rusRuningText.current.style. display = "none"
            footerLinkAboutUs.current.innerHTML = 'About Us'
            footerLinkProjects.current.innerHTML = 'Project'
            footerLinkApartments.current.innerHTML = 'Apartments'
            footerLinkSocialMedia.current.innerHTML = 'Social Media'
            footerLinkContact.current.innerHTML = 'Contact'
            twinsC.current.innerHTML = '(c) Twins Development'
        
        }else if(localStorage.language === 'rus'){
            geoRuningText.current.style. display = "none"
            engRuningText.current.style. display = "none"
            rusRuningText.current.style. display = "flex"
            footerLinkAboutUs.current.innerHTML = ''
            footerLinkProjects.current.innerHTML = ''
            footerLinkApartments.current.innerHTML = ''
            footerLinkSocialMedia.current.innerHTML = ''
            footerLinkContact.current.innerHTML = ''
            twinsC.current.innerHTML = ''
        }

    },[props.iseng, props.isrus, props.isgeo])

    return(
        <div className="footer">
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

            <div className="footer_bottom">
                <div className="footer_bottom_links">
                    <ul>
                    <Link to='/components/aboutUsPage/AboutUsPage'><li ref={footerLinkAboutUs}>ჩვენ შესახებ</li></Link>
                    <Link to='/components/AboutProject/AboutProject'><li ref={footerLinkProjects}>პროექტი</li></Link>
                    <Link to='/components/Apartments/Apartments'><li ref={footerLinkApartments}>ბინები</li></Link>
                    </ul>

                    <ul>
                        <li ref={footerLinkSocialMedia}>სოციალური მედია</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>

                    <ul>
                        <li ref={footerLinkContact}>კონტაქტი</li>
                        <li>592 23 43 22</li>
                        <li>info@Twins.com.ge</li>
                    </ul>

                </div>

                <div className="footer_bottom_right">
                    <p className="copyright" ref={twinsC}>(c) თვინს დეველოპმენტი</p>
                </div>
            </div>

            <div className="responsive_footer">
                <div className="responsive_footer-cl1">
                <Link to='/components/aboutUsPage/AboutUsPage'><span>ჩვენ შესახებ</span></Link>
                <Link to='/components/Apartments/Apartments'><span>ბინები</span></Link>
                <Link to='/components/AboutProject/AboutProject'><span>მიმდინარე პროექტი</span></Link>
                </div>

                <div className="responsive_footer-cl2">
                    <span>592 23 43 22</span>
                    <span>info@twins.com.ge</span>
                    <span>თბილისი, ვიქტორ კუპრაძის 68</span>
                </div>
            </div>

            <div className="responsive_footer_social_logo">
                <img className="footerResSocialIcons" src={footerInsta} alt="footer insta" />
                <img className="footerResSocialIcons" src={footerInsta} alt="footer insta" />
                <img className="footerResSocialIcons" src={footerInsta} alt="footer insta" />
            </div>
        </div>
    )
}
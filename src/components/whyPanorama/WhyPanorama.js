import {React, useEffect, useState, useRef} from "react";

import './WhyPanorama.css'
import floatClif from '../../images/floatClif.png'

export default function WhyPanorama(props) {
    const whyPanoramaHeaderRef = useRef()
    const whyPanoramaParagraphRef = useRef()
    const whyPanoramaBtn = useRef()

    useEffect(()=>{
        whyPanoramaHeaderRef.current.innerHTML = 'რატომ პანორამა ვარკეთილი?'
        whyPanoramaParagraphRef.current.innerHTML = 'პანორამა ვარკეთილი ჩვენი ახალი პროექტია, ჰუალინგ თბილისი პლაზის ახალ ქალაქში. <br/><br/>კორპუსის ძირითადი ნაწილი გარშემორტყმულია პანორამული ხედებით თბილისსა და თბილისის ზღვაზე, რომელსაც ანალოგი არ ჰყავს ქალაქის ამ ნაწილში.'
        whyPanoramaBtn.current.innerHTML = 'დაგვირეკე'
        if(localStorage.language === 'eng'){
            whyPanoramaHeaderRef.current.innerHTML = 'Why Panorama Varketili?'
            whyPanoramaParagraphRef.current.innerHTML =  'Experience breathtaking panoramic views of Tbilisi and the Tbilisi Sea from our new project, Panorama Varketili. Located in a vibrant and exciting part of the city, this building offers a living experience like no other'    
            whyPanoramaBtn.current.innerHTML = 'Contact Us'
        }else if(localStorage.language === 'rus'){
            whyPanoramaHeaderRef.current.innerHTML = ''
            whyPanoramaParagraphRef.current.innerHTML = ''
            whyPanoramaBtn.current.innerHTML = ''
        }

    },[props.iseng, props.isrus, props.isgeo])

    return(
        <div className='why_panorama'>
            <div className="header_txt_btn">
                <h1 className="why_panorama_h1" ref={whyPanoramaHeaderRef}>რატომ  პანორამა ვარკეთილი?</h1>
                <p className="why_panorama_txt" ref={whyPanoramaParagraphRef}>პანორამა ვარკეთილი ჩვენი ახალი პროექტია, ჰუალინგ თბილისი პლაზის ახალ ქალაქში. <br/><br/>
                    კორპუსის ძირითადი ნაწილი გარშემორტყმულია პანორამული ხედებით თბილისსა და თბილისის ზღვაზე, 
                    რომელსაც ანალოგი არ ჰყავს ქალაქის ამ ნაწილში.
                </p>
                <div className="why_panorama_btn">
                    <span ref={whyPanoramaBtn}>დაგვირეკე</span>
                </div>
            </div>

            <img className="float_cliff" src={floatClif}/>
        </div>
    )
}
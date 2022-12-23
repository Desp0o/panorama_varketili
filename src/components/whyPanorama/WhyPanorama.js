import {React, useEffect, useState, useRef} from "react";

import './WhyPanorama.css'
import floatClif from '../../images/floatClif.png'

export default function WhyPanorama() {
    return(
        <div className='why_panorama'>
            <div className="header_txt_btn">
                <h1 className="why_panorama_h1">რატომ <br/> პანორამა ვარკეთილი?</h1>
                <p className="why_panorama_txt">პანორამა ვარკეთილი ჩვენი ახალი პროექტია, ჰუალინგ თბილისი პლაზის ახალ ქალაქში. <br/><br/>
                    კორპუსის ძირითადი ნაწილი გარშემორტყმულია პანორამული ხედებით თბილისსა და თბილისის ზღვაზე, 
                    რომელსაც ანალოგი არ ჰყავს ქალაქის ამ ნაწილში.
                </p>
                <div className="why_panorama_btn">
                    <span>დაგვირეკე</span>
                </div>
            </div>

            <img className="float_cliff" src={floatClif}/>
        </div>
    )
}
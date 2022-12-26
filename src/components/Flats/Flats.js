import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";

import renderB02 from '../../images/RenderB02.png'
import renderB04 from '../../images/RenderB04.png'
import renderB03 from '../../images/RenderB03.png'
import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'

import callFloatBtn from '../../images/callFloatBtn.png'

import './Flats.css'

const renderArr =[
    {
        Id: 1,
        image: `${renderB02}`,
        text1: '/ 90 M2',
        text2: '/ 2',
        link: '/components/Apartments/apartmentsInner/Apartment90'
    },

    {
        Id: 2,
        image: `${renderB04}`,
        text1: '/ 71.5 M2',
        text2: '/ 2',
        link: '/components/Apartments/apartmentsInner/Apartment71Sec'
    },

    {
        Id: 3,
        image: `${renderB03}`,
        text1: '/ 76.6 M2',
        text2: '/ 2',
        link: '/components/Apartments/apartmentsInner/Apartment76'
    }
]

export default function Flats(props){
    const ref = useRef()
    const floatButtonRef = useRef()
    const flatsHeaderRef = useRef()
    const seeMoreRef = useRef()
       
    const [floatBtnClass, setFloatBtnClass] = useState('call_float_btn')

    
    useEffect(()=>{
       
        const element = ref.current;
        const topOffset = element.offsetTop;

        window.addEventListener('scroll',()=>{
            if(window.scrollY > (topOffset-60)){
                setFloatBtnClass('call_float_btn call_float_btn_active')
            }else{
                setFloatBtnClass('call_float_btn')
            }
        })

        return
       
    },[])

    useEffect(()=>{
        flatsHeaderRef.current.innerHTML = 'შეარჩიე სასურველი ბინა'
        seeMoreRef.current.innerHTML = 'მეტი'


        if(localStorage.language === 'eng'){

            flatsHeaderRef.current.innerHTML = 'Choose your ideal apartment'
            seeMoreRef.current.innerHTML = 'See More'

        }else if(localStorage.language === 'rus'){
            flatsHeaderRef.current.innerHTML = ''
            seeMoreRef.current.innerHTML = ''
        }

        

    },[props.iseng, props.isrus, props.isgeo])


    return(
        <div className="flats">
            <div className="headers_and_more">
                <h2 className="flats_header" ref={flatsHeaderRef}>შეარჩიე სასურველი ბინა</h2>

                <div className="flats_plus">
                    <Link to='/components/Apartments/Apartments'><h2 className="more_flats" ref={seeMoreRef}>მეტი</h2></Link>
                    <svg className="svgPlus" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="plusPath" d="M4.12988 8.57489V5.29364H0.536133V3.57489H4.12988V0.29364H5.8584V3.57489H9.45215V5.29364H5.8584V8.57489H4.12988Z" />
                    </svg>
                </div>
            </div>

            <img src={callFloatBtn} ref={floatButtonRef} className={floatBtnClass} />

            <div className="cards">
                {
                    renderArr.map((render)=>{
                        return(
                            
                            <div ref={ref}  key={render.Id}  className="card">
                            <Link to={render.link}>
                                <div className="card_inner_top">
                                    <img className="card_render_main_screen" src={render.image} />
                                </div>

                                <div className="card_inner_bottom">
                                    <div className="card_inner_bottom_left">
                                        <img className="mc_Icon" src={meterCoub} />
                                        <p className="card_inner_bottom_p">{render.text1}</p>
                                    </div>

                                    <div className="card_inner_bottom_right">
                                        <img className="bed_Icon" src={bed} />
                                        <p className="card_inner_bottom_p">{render.text2}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
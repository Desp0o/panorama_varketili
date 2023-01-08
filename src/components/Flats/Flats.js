import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";

import renderB02 from '../../images/RenderB02.png'
import renderB04 from '../../images/RenderB04.png'
import renderB03 from '../../images/RenderB03.png'
import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'


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
    const flatsHeaderRef = useRef()
       
    useEffect(()=>{
        flatsHeaderRef.current.innerHTML = 'შეარჩიე სასურველი ბინა'


        if(localStorage.language === 'eng'){

            flatsHeaderRef.current.innerHTML = 'Choose your ideal apartment'

        }else if(localStorage.language === 'rus'){
            flatsHeaderRef.current.innerHTML = ''
        }

        

    },[props.iseng, props.isrus, props.isgeo])

    const cardsListRef = useRef()
    let box = document.querySelector('.cards')
    let card = document.querySelector('.card')
    function toLeft() {
        // let width = cardsListRef.current.clientWidth;

        // cardsListRef.current.scrollLeft = cardsListRef.current.scrollLeft - width;
        // console.log(cardsListRef.current.scrollLeft);

        let width = card.clientWidth
        box.scrollLeft = box.scrollLeft - width;
        console.log(box.scrollLeft);
        
    }
    

    return(
        <div className="flats">
            <div className="headers_and_more">
                <h2 className="flats_header" ref={flatsHeaderRef}>შეარჩიე სასურველი ბინა</h2>
            </div>

           
             <div className="cards" >
                {
                    renderArr.map((render)=>{
                        return(
                            
                            <div className="card_outter">
                                <div key={render.Id}  className="card" ref={cardsListRef}>
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

                                    <div className="leftBtn"><img src={leftArrow} alt="card swap arrow" onClick={toLeft}/></div>
                                    <div className="rightBtn"><img src={rightArrow} alt="card swap arrow"/></div>
                            </div>
                            
                        )
                    })
                }
            </div>

            <div className="btnOuter">
                <Link to='/components/Apartments/Apartments'><div className="seeMoreBtn">
                    <p>მეტი ბინა</p>
                </div></Link>
            </div>

        </div>
    )
}
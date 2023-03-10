import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";



import renderB02 from '../../images/RenderB02.png'
import renderB04 from '../../images/RenderB04.png'
import renderB03 from '../../images/RenderB03.png'
import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";


import './Flats.css'

const renderArr =[
    {
        id: 1,
        image: `${renderB02}`,
        text1: '/ 90 M2',
        text2: '/ 2',
        link: '/components/Apartments/apartmentsInner/Apartment90'
    },

    {
        id: 2,
        image: `${renderB04}`,
        text1: '/ 71.5 M2',
        text2: '/ 2',
        link: '/components/Apartments/apartmentsInner/Apartment71Sec'
    },

    {
        id: 3,
        image: `${renderB03}`,
        text1: '/ 76.6 M2',
        text2: '/ 1',
        link: '/components/Apartments/apartmentsInner/Apartment76'
    }
]

export default function Flats(props){
    const flatsHeaderRef = useRef()
    const seeMoreApartments = useRef()

       
    useEffect(()=>{
        flatsHeaderRef.current.innerHTML = 'შეარჩიე სასურველი ბინა'
        seeMoreApartments.current.innerHTML = 'მეტი ბინა'


        if(localStorage.language === 'eng'){

            flatsHeaderRef.current.innerHTML = 'Choose your ideal apartment'
            seeMoreApartments.current.innerHTML = 'More apartments'

        }else if(localStorage.language === 'rus'){
            flatsHeaderRef.current.innerHTML = 'Выберите свою идеальную квартиру'
            seeMoreApartments.current.innerHTML = 'Еще апартаменты'
        }

        

    },[props.iseng, props.isrus, props.isgeo])

   
    

    return(
        <div className="flats">
            <div className="headers_and_more">
                <h2 className="flats_header" ref={flatsHeaderRef} style={props.styleeng}>შეარჩიე სასურველი ბინა</h2>
            </div>

           
             <div className="cards" >

                <div className="cards maping_cards">
                {
                    renderArr.map((render)=>{
                        return(
                            
                            <>
                                <div className="card" >
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
                            </>
                            
                        )
                    })
                }
                </div>

                {/* swiper slider */}
                <div className="swiper_slider_responsive">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={15}
                        centeredSlides={true}
                        modules={[Navigation]}
                        loop={true}
                        className="swiper"
                        navigation={{
                            
                            prevEl: '.leftBtn',
                            nextEl: '.rightBtn'
                        }}
                    >
                        <SwiperSlide>
                            <div className="card_outer_div">
                                <div  className="card" >
                                    <Link to='/components/Apartments/apartmentsInner/Apartment90'>
                                        <div className="card_inner_top">
                                            <img className="card_render_main_screen" src={renderB02} />
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} />
                                                <p className="card_inner_bottom_p">/ 90 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} />
                                                <p className="card_inner_bottom_p">/ 2</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="leftBtn"><img src={leftArrow} alt='swiper buttons'/></div>
                                <div className="rightBtn"><img src={rightArrow} alt='swiper buttons'/></div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card_outer_div">
                                <div  className="card" >
                                    <Link to='/components/Apartments/apartmentsInner/Apartment71Sec'>
                                        <div className="card_inner_top">
                                            <img className="card_render_main_screen" src={renderB04} />
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} />
                                                <p className="card_inner_bottom_p">/ 71.5 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} />
                                                <p className="card_inner_bottom_p">/ 2</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="leftBtn"><img src={leftArrow} alt='swiper buttons'/></div>
                                <div className="rightBtn"><img src={rightArrow} alt='swiper buttons'/></div>

                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="card_outer_div">
                                <div  className="card" >
                                    <Link to='/components/Apartments/apartmentsInner/Apartment76'>
                                        <div className="card_inner_top">
                                            <img className="card_render_main_screen" src={renderB03} />
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} />
                                                <p className="card_inner_bottom_p">/ 76.6 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} />
                                                <p className="card_inner_bottom_p">/ 1</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="leftBtn"><img src={leftArrow} alt='swiper buttons'/></div>
                                <div className="rightBtn"><img src={rightArrow} alt='swiper buttons'/></div>

                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    <div className='btns'></div>
                    <div className='next'></div>
                </div>
                {/* ************** */}

            </div>

            <div className="btnOuter">
                <Link to='/components/Apartments/Apartments'><div className="seeMoreBtn">
                    <p style={props.styleeng} ref={seeMoreApartments}>მეტი ბინა</p>
                </div></Link>
            </div>

        </div>
    )
}
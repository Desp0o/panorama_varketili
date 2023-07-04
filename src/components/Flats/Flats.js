import {React, useEffect, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import renderB02 from '../../images/render90.webp'
import renderB04 from '../../images/render71.webp'
// import renderB03 from '../../images/render76.webp'
import render57 from '../../images/render57.webp'
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
import { LangContext } from "../langContext";

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
        link: '/components/Apartments/apartmentsInner/Apartment71Sec',
        class: 'personalStyle'
    },

    {
        id: 3,
        image: `${render57}`,
        text1: '/ 57.6 M2',
        text2: '/ 1',
        link: '/components/Apartments/apartmentsInner/Apartment57'
    },
]

export default function Flats(props){
    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)

    const flatsHeaderRef = useRef()
    const seeMoreApartments = useRef()

       
    useEffect(()=>{
        flatsHeaderRef.current.innerText = 'შეარჩიე სასურველი ბინა'
        seeMoreApartments.current.innerText = 'მეტი ბინა'


        if(localStorage.language === 'eng'){

            flatsHeaderRef.current.innerText = 'Choose your ideal apartment'
            seeMoreApartments.current.innerText = 'More apartments'

        }else if(localStorage.language === 'rus'){
            flatsHeaderRef.current.innerText = 'Выберите свою идеальную квартиру'
            seeMoreApartments.current.innerText = 'Еще апартаменты'
        }

        

    },[isGeo, isEng, isRus])

   
    

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
                            
                            
                                <div className="card" key={render.id}>
                                <Link to={render.link}>
                                    <div className="card_inner_top">
                                        <img className={`card_render_main_screen ${render.class}`} src={render.image} alt='mc icon'/>
                                    </div>

                                    <div className="card_inner_bottom">
                                        <div className="card_inner_bottom_left">
                                            <img className="mc_Icon" src={meterCoub} alt='mc icon'/>
                                            <p className="card_inner_bottom_p">{render.text1}</p>
                                        </div>

                                        <div className="card_inner_bottom_right">
                                            <img className="bed_Icon" src={bed} alt='mc icon'/>
                                            <p className="card_inner_bottom_p">{render.text2}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            
                            
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
                                            <img className="card_render_main_screen" src={renderB02} alt='render'/>
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} alt='mc icon'/>
                                                <p className="card_inner_bottom_p">/ 90 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} alt='bed icon'/>
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
                                            <img className="card_render_main_screen personalStyle" src={renderB04} alt='render'/>
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} alt='coub icon'/>
                                                <p className="card_inner_bottom_p">/ 71.5 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} alt='bed icon'/>
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
                                    <Link to='/components/Apartments/apartmentsInner/Apartment57'>
                                        <div className="card_inner_top">
                                            <img className="card_render_main_screen" src={render57} alt='render'/>
                                        </div>

                                        <div className="card_inner_bottom">
                                            <div className="card_inner_bottom_left">
                                                <img className="mc_Icon" src={meterCoub} alt='mc icon'/>
                                                <p className="card_inner_bottom_p">/ 57.6 M2</p>
                                            </div>

                                            <div className="card_inner_bottom_right">
                                                <img className="bed_Icon" src={bed} alt='bed icon'/>
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
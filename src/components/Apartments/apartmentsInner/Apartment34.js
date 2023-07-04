import {React, useEffect, useState, useRef, useContext} from "react";
import {Link} from  "react-router-dom";
import Navbar from "../../navbar";
import Footer from '../../footer/Footer'
import './ApartmentInnerCSS.css'
import render34 from '../../../images/innerRenders/m34inner.webp'
import toBackimg from '../../../images/toback.png'
import { LangContext } from "../../langContext";


const pointerStyle3 ={
    right: '33%',
    top: '67%'
}

const pointerStyle2 ={
    right: '43%',
    top: '47%'
}

const pointerStyle1 ={
    right: '58%',
    top: '24%'
}

const styleENG={
    fontFamily: 'Roboto'
}

export default function Apartment57(props) {

    const {isEng} = useContext(LangContext)
    const {isGeo} = useContext(LangContext)
    const {isRus} = useContext(LangContext)  

    const [style, setStyle] = useState(styleENG)

    const [ballNumber, setBallNumber] = useState(null)
    const [ball1txt, setBall1txt] = useState(null)
    const [ball2txt, setBall2txt] = useState(null)
    const [ball3txt, setBall3txt] = useState(null)
    const [ball4txt, setBall4txt] = useState(null)
    const [ball5txt, setBall5txt] = useState(null)
    const [roomGeo, setRoomGeo] = useState(null)
    const [roomEng, setRoomEng] = useState(null)
    const [roomRus, setRoomRus] = useState(null)

    const toBack = useRef()

    useEffect(()=>{
        setStyle(null)

        setRoomGeo(null)
        setRoomEng('roomType')
        setRoomRus('roomType')

        toBack.current.innerText = 'უკან'
        
    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        setRoomGeo('roomType')
        setRoomEng(null)
        setRoomRus('roomType')

        toBack.current.innerText = 'Back'

    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        setRoomGeo('roomType')
        setRoomEng('roomType')
        setRoomRus(null)

        toBack.current.innerText = 'назад'
    }
    },[isEng,isGeo, isRus])

    const roomsArr = [
        
    
        {   
            id: 1,
            number:1,
            roomTypeGeo: 'სააბაზანო',
            roomTypeEng: 'Bathroom',
            roomTypeRus: 'Ванная',
            m2: '4.1 M2',
            forBold: `${ball1txt}` 
        },
    
        {
            id: 2,
            number:2,
            roomTypeGeo: 'სტუდიო',
            roomTypeEng: 'Studio',
            roomTypeRus: 'Студиo',
            m2: '24.1 M2',
            forBold: `${ball2txt}` 
        },
    
        {
            id: 3,
            number:3,
            roomTypeGeo: 'აივანი',
            roomTypeEng: 'Balcony',
            roomTypeRus: 'Балкон',
            m2: '6 M2',
            forBold: `${ball3txt}` 
        }
    ]


    
    return(
        <>
        <Navbar activeApartments="active_page"/>

        <div className="apartment_main">

            <div className="apartment_main_inner fixInnerPaddingForNewApartments">

                <div className="to_back">
                    <img src={toBackimg} alt="back arrow" />
                    <Link to='/components/Apartments/Apartments'><p style={style} ref={toBack}>უკან</p></Link>
                </div>

                <div className="apartment_main_inner_left">
                    <img src={render34} alt="m102inner" style={{scale:'0.7'}} />

                    <span style={pointerStyle3} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 3){
                                setBallNumber(null)
                                setBall3txt('default')
                            }else{
                                setBallNumber(3)
                                setBall3txt('bold')

                                setBall1txt('default')
                                setBall2txt('default')
                                setBall4txt('default')
                                setBall5txt('default')
                            }
                        }}
                    >3</span>

                    <span style={pointerStyle2} className="pointers"
                    onClick={()=>{
                        if(ballNumber === 2){
                            setBallNumber(null)
                            setBall2txt('default')
                        }else{
                            setBallNumber(2)
                            setBall2txt('bold')
                            
                            setBall1txt('default')
                            setBall3txt('default')
                            setBall4txt('default')
                            setBall5txt('default')
                        }
                    }}
                    >2</span>

                    <span 
                        style={pointerStyle1} 
                        className="pointers" 
                        onClick={()=> {
                            if(ballNumber === 1){
                                setBallNumber(null)
                                setBall1txt('default')
                            }else{
                                setBallNumber(1)
                                setBall1txt('bold')

                                setBall2txt('default')
                                setBall3txt('default')
                                setBall4txt('default')
                                setBall5txt('default')
                            }
                        }
                            
                        }
                        >1</span>
                </div>

                <div className="apartment_main_inner_right">
                    <div className="apHeader">34.5 M2</div>

                    {
                        roomsArr.map((room)=>{
                            return(
                                <div className="apartment_rooms" key={room.id}>
                                    <div className="room">

                                        <div className="number_name">
                                            <div className="numberRounded">{room.number}</div>

                                            <p className={roomGeo}><span className={room.forBold}>{room.roomTypeGeo}</span></p>
                                            <p className={roomEng} style={style}><span className={room.forBold}>{room.roomTypeEng}</span></p>
                                            <p className={roomRus} style={style}><span className={room.forBold}>{room.roomTypeRus}</span></p>
                                        </div>

                                        <p className={room.forBold}>{room.m2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>

        <Footer styleeng={style}/>
        </>
    )
}
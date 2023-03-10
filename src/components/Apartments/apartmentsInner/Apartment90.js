import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import Footer from '../../footer/Footer'
import logo from '../../../images/logo.png'
import './ApartmentInnerCSS.css'
import m102inner from '../../../images/innerRenders/m90inner.png'
import burgerClose from '../../../images/burgerClose.png'
import burgerStick from '../../../images/sticks.png'
import toBackimg from '../../../images/toback.png'

const pointerStyle6 ={
    left: '30%',
    top: '64%'
}

const pointerStyle5 ={
    left: '40%',
    top: '33%'
}

const pointerStyle4 ={
    right: '38%',
    top: '53%'
}

const pointerStyle3 ={
    right: '57%',
    top: '50%'
}

const pointerStyle2 ={
    right: '38%',
    top: '26%'
}

const pointerStyle1 ={
    right: '30%',
    top: '35%'
}

const styleENG={
    fontFamily: 'Roboto'
}

export default function Apartment90(props) {

    const [style, setStyle] = useState(styleENG)
    const [roomGeo, setRoomGeo] = useState(null)
    const [roomEng, setRoomEng] = useState(null)
    const [roomRus, setRoomRus] = useState(null)

    const [ballNumber, setBallNumber] = useState(null)
    const [ball1txt, setBall1txt] = useState('default')
    const [ball2txt, setBall2txt] = useState('default')
    const [ball3txt, setBall3txt] = useState('default')
    const [ball4txt, setBall4txt] = useState('default')
    const [ball5txt, setBall5txt] = useState('default')
    const [ball6txt, setBall6txt] = useState('default')

    const toBack = useRef()

    useEffect(()=>{
        setStyle(null)

        setRoomGeo(null)
        setRoomEng('roomType')
        setRoomRus('roomType')

        toBack.current.innerHTML = 'უკან'
        
    if(localStorage.language === 'eng'){
        setStyle(styleENG)

        setRoomGeo('roomType')
        setRoomEng(null)
        setRoomRus('roomType')

        toBack.current.innerHTML = 'Back'

    }else if(localStorage.language === 'rus'){
        setStyle(styleENG)

        setRoomGeo('roomType')
        setRoomEng('roomType')
        setRoomRus(null)

        toBack.current.innerHTML = 'назад'
    }
    },[props.isEng, props.isGeo, props.isRus])


    const roomsArr = [
        {   
            id: 1,
            number:1,
            roomTypeGeo: 'ჰოლი',
            roomTypeEng: 'Hall',
            roomTypeRus: 'холл',
            m2: '12.4 M2',
            forBold: `${ball1txt}`   
        },
    
        {   
            id: 2,
            number:2,
            roomTypeGeo: 'სააბაზანო',
            roomTypeEng: 'Bathroom',
            roomTypeRus: 'Ванная',
            m2: '5.1 M2',
            forBold: `${ball2txt}`
        },
    
        {
            id: 3,
            number:3,
            roomTypeGeo: 'საძინებელი 1',
            roomTypeEng: 'Bedroom 1',
            roomTypeRus: 'Спальная 1',
            m2: '13.4 M2',
            forBold: `${ball3txt}`
        },
    
        {
            id: 4,
            number:4,
            roomTypeGeo: 'საძინებელი 2',
            roomTypeEng: 'Bedroom 2',
            roomTypeRus: 'Спальная 2',
            m2: '14 M2',
            forBold: `${ball4txt}`
        },
    
        {
            id: 5,
            number:5,
            roomTypeGeo: 'სტუდიო',
            roomTypeEng: 'Studio',
            roomTypeRus: 'Студиo',
            m2: '30.6 M2',
            forBold: `${ball5txt}`
        },
    
        {
            id: 6,
            number:6,
            roomTypeGeo: 'აივანი',
            roomTypeEng: 'Balcony',
            roomTypeRus: 'Балкон',
            m2: '27.3 M2',
            forBold: `${ball6txt}`
        }
    ]

    return(
        <>

        <div className="apartment_main">

            <div className="apartment_main_inner">

                <div className="to_back">
                    <img src={toBackimg} alt="back arrow" />
                    <Link to='/components/Apartments/Apartments'><p style={style} ref={toBack}>უკან</p></Link>
                </div>

                <div className="apartment_main_inner_left">
                    <img src={m102inner} alt="m102inner" />

                    <span style={pointerStyle6} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 6){
                                setBallNumber(null)
                                setBall6txt('default')
                            }else{
                                setBallNumber(6)
                                setBall6txt('bold')

                                setBall1txt('default')
                                setBall2txt('default')
                                setBall3txt('default')
                                setBall4txt('default')
                                setBall5txt('default')
                            }
                        }}
                    >6</span>

                    <span style={pointerStyle5} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 5){
                                setBallNumber(null)
                                setBall5txt('default')
                            }else{
                                setBallNumber(5)
                                setBall5txt('bold')

                                setBall1txt('default')
                                setBall2txt('default')
                                setBall3txt('default')
                                setBall4txt('default')
                                setBall6txt('default')
                            }
                        }}
                    >5</span>

                    <span style={pointerStyle4} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 4){
                                setBallNumber(null)
                                setBall4txt('default')
                            }else{
                                setBallNumber(4)
                                setBall4txt('bold')

                                setBall1txt('default')
                                setBall2txt('default')
                                setBall3txt('default')
                                setBall5txt('default')
                                setBall6txt('default')
                            }
                        }}
                    >4</span>

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
                                setBall6txt('default')
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
                            setBall6txt('default')
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
                                setBall6txt('default')
                            }
                        }
                            
                        }
                        >1</span>
                </div>

                <div className="apartment_main_inner_right">
                    <div className="apHeader">90.2 M2</div>

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

        <Footer iseng={props.isEng} isgeo={props.isGeo} isrus={props.isRus}/>
        </>
    )
}
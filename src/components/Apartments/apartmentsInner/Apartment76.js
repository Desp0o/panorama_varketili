import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import Footer from '../../footer/Footer'
import logo from '../../../images/logo.svg'
import './ApartmentInnerCSS.css'
import m102inner from '../../../images/innerRenders/m76inner.png'

const pointerStyle6 ={
    left: '45%',
    top: '77%'
}

const pointerStyle5 ={
    left: '33%',
    top: '43%'
}

const pointerStyle4 ={
    right: '25%',
    top: '45%'
}

const pointerStyle3 ={
    right: '41%',
    top: '47%'
}

const pointerStyle2 ={
    right: '44%',
    top: '24%'
}

const pointerStyle1 ={
    right: '59%',
    top: '28%'
}

export default function Apartment76() {

    const GeoLanguage = useRef()
    const navbarLinkFlats = useRef()
    const navbarLinkAboutUs = useRef()
    const navbarLinkAboutProject = useRef()
    const navbarLinkContact = useRef()
    const EngLanguage = useRef()
    const RusLanguage = useRef()


    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)
    const [roomGeo, setRoomGeo] = useState(null)
    const [roomEng, setRoomEng] = useState(null)
    const [roomRus, setRoomRus] = useState(null)

    const [ballNumber, setBallNumber] = useState(null)
    const [ball1txt, setBall1txt] = useState(null)
    const [ball2txt, setBall2txt] = useState(null)
    const [ball3txt, setBall3txt] = useState(null)
    const [ball4txt, setBall4txt] = useState(null)
    const [ball5txt, setBall5txt] = useState(null)
    const [ball6txt, setBall6txt] = useState(null)

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)

        setRoomGeo(null)
        setRoomEng('roomType')
        setRoomRus('roomType')

        GeoLanguage.current.style.color = '#029FA0'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'პროექტების შესახებ'
        
    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)

        setRoomGeo('roomType')
        setRoomEng(null)
        setRoomRus('roomType')

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'
        
        navbarLinkFlats.current.innerHTML = 'Apartments'
        navbarLinkAboutUs.current.innerHTML = 'About Us'
        navbarLinkAboutProject.current.innerHTML = 'About Project'


    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)

        setRoomGeo('roomType')
        setRoomEng('roomType')
        setRoomRus(null)

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'

        navbarLinkFlats.current.innerHTML = ''
        navbarLinkAboutUs.current.innerHTML = ''
        navbarLinkAboutProject.current.innerHTML = ''
    }
    },[isEng, isGeo, isRus])

    function makeENG() {
        setIsEng(true)
        setIsRus(false)
        setIsGeo(false)
        localStorage.setItem('language', 'eng')
    }

    function makeGEO() {
        setIsEng(false)
        setIsRus(false)
        setIsGeo(true)
        localStorage.removeItem('language')
    }

    function makeRUS() {
        setIsEng(false)
        setIsRus(true)
        setIsGeo(false)
        localStorage.setItem('language', 'rus')
    }

    
const roomsArr = [
    {   
        id: 1,
        number:1,
        roomTypeGeo: 'ჰოლი',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '5.4 M2',
        forBold: `${ball1txt}`       
    },

    {   
        id: 2,
        number:2,
        roomTypeGeo: 'სააბაზანო',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '5 M2',
        forBold: `${ball2txt}` 
    },

    {
        id: 3,
        number:3,
        roomTypeGeo: 'საძინებელი 1',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '19.3 M2',
        forBold: `${ball3txt}` 
    },

    {
        id: 4,
        number:4,
        roomTypeGeo: 'საძინებელი 2',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '6.9 M2',
        forBold: `${ball4txt}` 
    },

    {
        id: 5,
        number:5,
        roomTypeGeo: 'სტუდიო',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '25s.9 M2',
        forBold: `${ball5txt}` 
    },

    {
        id: 6,
        number:6,
        roomTypeGeo: 'აივანი',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '10.3 M2',
        forBold: `${ball6txt}` 
    }
]

    

    return(
        <>
        <div className='Navbar'  style={{backgroundColor:'#A9C1A9'}}>
            <Link to='../MainPage'><img className="logo" src={logo} /></Link>

            <ul className="nav_menu">
                <Link to='/components/Apartments/Apartments'><li className="menu_links active_page" ref={navbarLinkFlats}>ბინები</li></Link>
                <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li></Link>
                <li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li>
            </ul>

            <div className="languages">
                <span ref={GeoLanguage} onClick={()=> makeGEO()}>GE</span>
                <span>/</span>
                <span ref={EngLanguage} onClick={()=> makeENG()}>EN</span>
                <span>/</span>
                <span ref={RusLanguage} onClick={()=> makeRUS()}>RU</span>
            </div>
        </div>

        <div className="apartment_main">

            <div className="apartment_main_inner">

                <div className="apartment_main_inner_left">
                    <img src={m102inner} alt="m102inner" />

                    <span style={pointerStyle6} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 6){
                                setBallNumber(null)
                                setBall6txt(null)
                            }else{
                                setBallNumber(6)
                                setBall6txt('bold')

                                setBall1txt(null)
                                setBall2txt(null)
                                setBall3txt(null)
                                setBall4txt(null)
                                setBall5txt(null)
                            }
                        }}
                    >6</span>

                    <span style={pointerStyle5} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 5){
                                setBallNumber(null)
                                setBall5txt(null)
                            }else{
                                setBallNumber(5)
                                setBall5txt('bold')

                                setBall1txt(null)
                                setBall2txt(null)
                                setBall3txt(null)
                                setBall4txt(null)
                                setBall6txt(null)
                            }
                        }}
                    >5</span>

                    <span style={pointerStyle4} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 4){
                                setBallNumber(null)
                                setBall4txt(null)
                            }else{
                                setBallNumber(4)
                                setBall4txt('bold')

                                setBall1txt(null)
                                setBall2txt(null)
                                setBall3txt(null)
                                setBall5txt(null)
                                setBall6txt(null)
                            }
                        }}
                    >4</span>

                    <span style={pointerStyle3} className="pointers"
                        onClick={()=>{
                            if(ballNumber === 3){
                                setBallNumber(null)
                                setBall3txt(null)
                            }else{
                                setBallNumber(3)
                                setBall3txt('bold')

                                setBall1txt(null)
                                setBall2txt(null)
                                setBall4txt(null)
                                setBall5txt(null)
                                setBall6txt(null)
                            }
                        }}
                    >3</span>

                    <span style={pointerStyle2} className="pointers"
                    onClick={()=>{
                        if(ballNumber === 2){
                            setBallNumber(null)
                            setBall2txt(null)
                        }else{
                            setBallNumber(2)
                            setBall2txt('bold')
                            
                            setBall1txt(null)
                            setBall3txt(null)
                            setBall4txt(null)
                            setBall5txt(null)
                            setBall6txt(null)
                        }
                    }}
                    >2</span>

                    <span 
                        style={pointerStyle1} 
                        className="pointers" 
                        onClick={()=> {
                            if(ballNumber === 1){
                                setBallNumber(null)
                                setBall1txt(null)
                            }else{
                                setBallNumber(1)
                                setBall1txt('bold')

                                setBall2txt(null)
                                setBall3txt(null)
                                setBall4txt(null)
                                setBall5txt(null)
                                setBall6txt(null)
                            }
                        }
                            
                        }
                        >1</span>
                </div>

                <div className="apartment_main_inner_right">
                    <div className="apHeader">76.6 M2</div>

                    {
                        roomsArr.map((room)=>{
                            return(
                                <div className="apartment_rooms" key={room.id}>
                                    <div className="room">

                                        <div className="number_name">
                                            <div className="numberRounded">{room.number}</div>

                                            <p className={roomGeo}><span className={room.forBold}>{room.roomTypeGeo}</span></p>
                                            <p className={roomEng}><span className={room.forBold}>{room.roomTypeEng}</span></p>
                                            <p className={roomRus}><span className={room.forBold}>{room.roomTypeRus}</span></p>
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

        <Footer iseng={isEng} isgeo={isGeo} isrus={isRus}/>
        </>
    )
}
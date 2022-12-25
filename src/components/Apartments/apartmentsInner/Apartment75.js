import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import Footer from '../../footer/Footer'
import logo from '../../../images/logo.svg'
import './ApartmentInnerCSS.css'
import m102inner from '../../../images/m102inner.png'

const roomsArr = [
    {   
        id: 1,
        number:1,
        roomTypeGeo: 'ჰოლი',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '6.8 M2'      
    },

    {   
        id: 2,
        number:2,
        roomTypeGeo: 'სააბაზანო',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '4.1 M2'
    },

    {
        id: 3,
        number:3,
        roomTypeGeo: 'საძინებელი 1',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '12 M2'
    },

    {
        id: 4,
        number:4,
        roomTypeGeo: 'საძინებელი 2',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '11.8 M2'
    },

    {
        id: 5,
        number:5,
        roomTypeGeo: 'სტუდიო',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '18.5 M2'
    },

    {
        id: 6,
        number:6,
        roomTypeGeo: 'აივანი',
        roomTypeEng: 'Hall',
        roomTypeRus: 'aaaa',
        m2: '21.8 M2'
    }
]

export default function Apartment75() {

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
        navbarLinkContact.current.innerHTML = 'კონტაქტი'
        
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
        navbarLinkContact.current.innerHTML = 'Contact'


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
        navbarLinkContact.current.innerHTML = ''
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

    return(
        <>
        <div className='Navbar'  style={{backgroundColor:'#A9C1A9'}}>
            <Link to='../MainPage'><img className="logo" src={logo} /></Link>

            <ul className="nav_menu">
                <Link to='/components/Apartments/Apartments'><li className="menu_links active_page" ref={navbarLinkFlats}>ბინები</li></Link>
                <Link to='/components/aboutUsPage/AboutUsPage'><li className="menu_links" ref={navbarLinkAboutUs}>ჩვენ შესახებ</li></Link>
                <li className="menu_links" ref={navbarLinkAboutProject}>პროექტების შესახებ</li>
                <li className="menu_links" ref={navbarLinkContact}>კონტაქტი</li>
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
                </div>

                <div className="apartment_main_inner_right">
                    <div className="apHeader">75 M2</div>

                    {
                        roomsArr.map((room)=>{
                            return(
                                <div className="apartment_rooms" key={room.id}>
                                    <div className="room">

                                        <div className="number_name">
                                            <div className="numberRounded">{room.number}</div>

                                            <p className={roomGeo}>{room.roomTypeGeo}</p>
                                            <p className={roomEng}>{room.roomTypeEng}</p>
                                            <p className={roomRus}>{room.roomTypeRus}</p>
                                        </div>

                                        <p>{room.m2}</p>
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
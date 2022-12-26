import {React, useEffect, useState, useRef} from "react";
import {Link} from  "react-router-dom";
import logo from '../../images/logo.svg'
import './ContactPage.css'

export default function ContactPage(){

    const contactPageHeader = useRef()
    const contactPageSocialMedia = useRef()
    const contactPagePhone = useRef()

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

    useEffect(()=>{
        setIsEng(false)
        setIsGeo(true)
        setIsRus(false)

        GeoLanguage.current.style.color = '#029FA0'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = 'black'

        navbarLinkFlats.current.innerHTML = 'ბინები'
        navbarLinkAboutUs.current.innerHTML = 'ჩვენ შესახებ'
        navbarLinkAboutProject.current.innerHTML = 'პროექტების შესახებ'
        navbarLinkContact.current.innerHTML = 'კონტაქტი'

        contactPageHeader.current.innerHTML = 'დაგვიკავშირდით, რათა დაგეხმაროთ სასურველი ბინის შერჩევაში'
        contactPageSocialMedia.current.innerHTML = 'სოციალური მედია'
        contactPagePhone.current.innerHTML = 'ტელეფონი'
        
    if(localStorage.language === 'eng'){
        setIsEng(true)
        setIsGeo(false)
        setIsRus(false)

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = '#029FA0'
        RusLanguage.current.style.color = 'black'
        
        navbarLinkFlats.current.innerHTML = 'Apartments'
        navbarLinkAboutUs.current.innerHTML = 'About Us'
        navbarLinkAboutProject.current.innerHTML = 'About Project'
        navbarLinkContact.current.innerHTML = 'Contact'

        contactPageHeader.current.innerHTML = ''
        contactPageSocialMedia.current.innerHTML = 'Social Media'
        contactPagePhone.current.innerHTML = 'Phone'


    }else if(localStorage.language === 'rus'){
        setIsEng(false)
        setIsGeo(false)
        setIsRus(true)

        GeoLanguage.current.style.color = 'black'
        EngLanguage.current.style.color = 'black'
        RusLanguage.current.style.color = '#029FA0'

        navbarLinkFlats.current.innerHTML = ''
        navbarLinkAboutUs.current.innerHTML = ''
        navbarLinkAboutProject.current.innerHTML = ''
        navbarLinkContact.current.innerHTML = ''

        contactPageHeader.current.innerHTML = ''
        contactPageSocialMedia.current.innerHTML = ''
        contactPagePhone.current.innerHTML = ''
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
        <div className='Navbar'>
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

        <div className="contact_page_inner">
            <div className="contact_page_inner_left">

                <h1 className="contact_page_header" ref={contactPageHeader}>დაგვიკავშირდით, რათა დაგეხმაროთ სასურველი ბინის შერჩევაში</h1>

                <div className="contact_p_h_and_li">
                    <p className="contact_page_list_header" ref={contactPageSocialMedia}>სოციალური მედია</p>
                    <ul className="contact_page_list">
                        <li className="underline_contact_page">Facebook</li>
                        <li className="underline_contact_page">Instagram</li>
                        <li className="underline_contact_page">LinkedIn</li>
                        <li className="underline_contact_page">Tik Tok</li>
                    </ul>
                </div>

                <div className="contact_phone_number">
                    <p className="contact_page_phone_header" ref={contactPagePhone}>ტელეფონი</p>
                    <p className="contact_page_number underline_contact_page">+ 995 593 123 123</p>
                </div>

                <div className="contact_page_email_div">
                    <p className="contact_page_email_header">Email</p>
                    <p className="contact_page_email underline_contact_page">+ 995 593 123 123</p>
                </div>
            </div>

            <div className="contact_page_inner_right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11911.02513073453!2d44.7838178!3d41.72577765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ska!2sge!4v1672038468905!5m2!1ska!2sge"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}
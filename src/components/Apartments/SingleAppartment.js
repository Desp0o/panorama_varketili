import { React, useEffect, useState, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer/Footer";
import "./ApartmentInnerCSS.css";
import toBackimg from "../../images/toback.png";
import { LangContext } from "../langContext";
import { ApartmentsArr } from "./ApartmentsData";

const styleENG = {
  fontFamily: "Roboto",
};

export default function SingleAppartment(props) {
  const { id } = useParams();

  const { isEng } = useContext(LangContext);
  const { isGeo } = useContext(LangContext);
  const { isRus } = useContext(LangContext);

  const [style, setStyle] = useState(styleENG);
  const [roomGeo, setRoomGeo] = useState(null);
  const [roomEng, setRoomEng] = useState(null);
  const [roomRus, setRoomRus] = useState(null);

  const [clickedBall, setClickedBall] = useState(null);
  const toBack = useRef();

  useEffect(() => {
    setStyle(null);

    setRoomGeo(null);
    setRoomEng("roomType");
    setRoomRus("roomType");

    toBack.current.innerText = "უკან";

    if (localStorage.language === "eng") {
      setStyle(styleENG);

      setRoomGeo("roomType");
      setRoomEng(null);
      setRoomRus("roomType");

      toBack.current.innerText = "Back";
    } else if (localStorage.language === "rus") {
      setStyle(styleENG);

      setRoomGeo("roomType");
      setRoomEng("roomType");
      setRoomRus(null);

      toBack.current.innerText = "назад";
    }
  }, [isEng, isGeo, isRus]);


  return (
    <>
      <Navbar activeApartments="active_page" />

      <div className="apartment_main">
        <div className="apartment_main_inner">
          <div className="to_back">
            <img src={toBackimg} alt="back arrow" />
            <Link to="/components/Apartments/Apartments">
              <p style={style} ref={toBack}>
                უკან
              </p>
            </Link>
          </div>

          <div className="apartment_main_inner_left">
            <img src={ApartmentsArr[id - 1]?.innerImage} alt="m102inner" style={ApartmentsArr[id - 1]?.scaleDown ? { transform: 'scale(0.7)' } : {}}/>

            {ApartmentsArr[id-1]?.pointers?.slice().reverse().map((item, index) => {
              return (
                <span
                  key={index}
                  style={item}
                  className="pointers"
                  onClick={() => setClickedBall(index + 1)}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>

          <div className="apartment_main_inner_right">
            <div className="apHeader">{ApartmentsArr[id - 1]?.m2} M2</div>

            {ApartmentsArr[id - 1]?.rooms?.map((room) => {
              return (
                <div className="apartment_rooms" key={room.id}>
                  <div className="room">
                    <div className="number_name">
                      <div className="numberRounded">{room.number}</div>

                      <p className={roomGeo}>
                        <span
                          className={
                            clickedBall === room.number ? "boldFont" : ""
                          }
                        >
                          {room.roomTypeGeo}
                        </span>
                      </p>
                      <p className={roomEng} style={style}>
                        <span
                          className={
                            clickedBall === room.number ? "boldFont" : ""
                          }
                        >
                          {room.roomTypeEng}
                        </span>
                      </p>
                      <p className={roomRus} style={style}>
                        <span
                          className={
                            clickedBall === room.number ? "boldFont" : ""
                          }
                        >
                          {room.roomTypeRus}
                        </span>
                      </p>
                    </div>

                    <p
                      className={clickedBall === room.number ? "boldFont" : ""}
                    >
                      {room.m2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer styleeng={style} />
    </>
  );
}

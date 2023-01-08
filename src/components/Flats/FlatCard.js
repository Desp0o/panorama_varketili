import flat from '../../images/innerRenders/m57inner.png'
import meterCoub from '../../images/meterCoube.png'
import bed from '../../images/bed.png'
import {Link} from  "react-router-dom";
import {React, useEffect, useState, useRef} from "react";
import './Flats.css'

export default function Card() {
    <div className="card" >
    <Link to=''>
        <div className="card_inner_top">
            <img className="card_render_main_screen" src={flat} />
        </div>

        <div className="card_inner_bottom">
            <div className="card_inner_bottom_left">
                <img className="mc_Icon" src={meterCoub} />
                <p className="card_inner_bottom_p">სად</p>
            </div>

            <div className="card_inner_bottom_right">
                <img className="bed_Icon" src={bed} />
                <p className="card_inner_bottom_p">ასდ</p>
            </div>
        </div>
        </Link>
    </div>
}
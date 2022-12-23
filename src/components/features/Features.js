import {React, useEffect, useState, useRef} from "react";

import FeatureBg from '../../images/FeatureBg.webp'
import './Features.css'

export default function Features() {
    return(
        <div className="features">
            <p className="features_header">უპირატესობები</p>

            <div className="feature_bg">
                <img src={FeatureBg} />
            </div>
        </div>
    )
}
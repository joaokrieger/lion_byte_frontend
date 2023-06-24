import React from "react";
import '../../assets/css/HomeBanner.css'
import imgBanner from '../../assets/img/banner_ram.png';

export default function HomeBanner(){

    return(
        <div id="banner_ram" className="d-flex justify-content-center">
          <img src={imgBanner} alt="Logo" width="900"></img>
        </div>
    );
}
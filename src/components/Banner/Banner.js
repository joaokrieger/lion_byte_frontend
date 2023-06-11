import React from "react";
import './Banner.css'
import imgBanner from '../../img/banner_ram.png';

export default function Banner(){

    return(
        <div id="banner_ram" className="d-flex justify-content-center">
          <img src={imgBanner} alt="Logo" width="900"></img>
        </div>
    );
}
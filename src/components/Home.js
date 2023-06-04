import React from "react";
import './Home.css'
import imgBanner from '../img/banner_ram.png';

export default function Home(){

    return(
        <div id="banner_ram" class="d-flex justify-content-center">
          <img src={imgBanner} alt="Logo" width="900"></img>
        </div>
    );
}
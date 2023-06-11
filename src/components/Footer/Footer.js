import React from "react";
import imgLogo from '../../img/logo.png';

export default function Footer(){
    return(
        <footer class="footer mt-auto py-3 bg-dark">
        <div class="container text-center">
            <img draggable="false" src={imgLogo} alt="Logo" width="100"></img>
        </div>
        </footer>
    );
}
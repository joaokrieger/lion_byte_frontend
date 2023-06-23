import React from "react";
import imgLogo from '../../assets/img/logo.png';

export default function Footer(){
    return(
        <footer className="footer mt-auto py-3 bg-dark">
        <div className="container text-center">
            <img draggable="false" src={imgLogo} alt="Logo" width="100"></img>
        </div>
        </footer>
    );
}
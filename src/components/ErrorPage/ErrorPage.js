import React from "react";
import imgError from '../../assets/img/error_page.png';

export default function ErrorPage(){

    return(
        <div className="d-flex justify-content-center">
            <img src={imgError} alt="Logo" width="600"></img>
        </div>
    );
}
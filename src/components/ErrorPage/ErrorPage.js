import React from "react";
import imgError from '../../img/error_page.png';

export default function ErrorPage(){

    return(
        <div class="d-flex justify-content-center">
            <img src={imgError} alt="Logo" width="600"></img>
        </div>
    );
}
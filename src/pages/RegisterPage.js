import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Footer from "../components/Footer/Footer";

export default function RegisterPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <RegisterForm/>
            <Footer/>
        </div>
    );
}
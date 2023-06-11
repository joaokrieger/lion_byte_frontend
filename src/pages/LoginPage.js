import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";

export default function LoginPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <LoginForm/>
            <Footer/>
        </div>
    );
}
import React from "react";
import UserEditForm from "../components/UserEditForm/UserEditForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function UserEditPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <Navbar/>
            <UserEditForm/>
            <Footer/>
        </div>
    );
}
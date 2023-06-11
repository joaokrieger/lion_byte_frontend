import React from "react";
import UserEditForm from "../components/UserEditForm/UserEditForm";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";

export default function UserEditPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserEditForm/>
            <Footer/>
        </div>
    );
}
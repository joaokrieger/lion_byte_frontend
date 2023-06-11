import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

export default function UserHomePage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <Banner/>
            <Footer/>
        </div>
    );
}
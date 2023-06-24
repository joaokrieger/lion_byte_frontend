import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/HomeBanner/HomeBanner";

export default function UserHomePage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <HomeBanner/>
            <Footer/>
        </div>
    );
}
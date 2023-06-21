import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserShopCart from "../components/UserShopCart/UserShopCart";

export default function UserShopCartPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserShopCart/>
            <Footer/>
        </div> 
    );
}
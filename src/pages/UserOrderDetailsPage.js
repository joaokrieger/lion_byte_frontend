import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserOrderDetails from "../components/UserOrderDetails/UserOrderDetails";

export default function UserOrderDetailsPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserOrderDetails/>
            <Footer/>
        </div>
    );
}
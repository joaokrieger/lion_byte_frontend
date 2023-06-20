import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserProductDetails from "../components/UserProductDetails/UserProductDetails";

export default function UserProductDetailsPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserProductDetails/>
            <Footer/>
        </div>
    );
}
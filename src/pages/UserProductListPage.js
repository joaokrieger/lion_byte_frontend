import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserProductCard from "../components/UserProductCard/UserProductCard";

export default function UserProductListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserProductCard/>
            <Footer/>
        </div>
    );
}
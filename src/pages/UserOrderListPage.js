import React from "react";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/Footer/Footer";
import UserOrderCard from "../components/UserOrderCard/UserOrderCard";

export default function UserOrderListPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <UserNavbar/>
            <UserOrderCard/>
            <Footer/>
        </div>
    );
}
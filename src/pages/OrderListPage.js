import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OrderCard from "../components/OrderCard/OrderCard";

export default function OrderListPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <Navbar/>
            <OrderCard/>
            <Footer/>
        </div>
    );
}
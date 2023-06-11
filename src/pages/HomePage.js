import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

export default function HomePage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <Navbar/>
            <Banner/>
            <Footer/>
        </div>
    );
}
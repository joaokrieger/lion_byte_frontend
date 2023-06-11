import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";

export default function ProductListPage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <Navbar/>
            <ProductCard/>
            <Footer/>
        </div>
    );
}
import React from "react";
import Footer from "../components/Footer/Footer";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminProductForm from "../components/AdminProductForm/AdminProductForm";

export default function AdminProductFormPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminProductForm/>
            <Footer/>
        </div>
    );
}
import React from "react";
import Footer from "../components/Footer/Footer";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";

export default function AdminHomePage(){
    return(
        <div class="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <Footer/>
        </div>
    );
}
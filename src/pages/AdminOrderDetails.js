import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminOrderDetails from "../components/AdminOrderDetails/AdminOrderDetails";

export default function AdminOrderDetailsPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminOrderDetails/>
            <Footer/>
        </div>
    );
}
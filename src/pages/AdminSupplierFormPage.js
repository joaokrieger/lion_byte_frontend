import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminSupplierForm from "../components/AdminSupplierForm/AdminSupplierForm";

export default function AdminSupplierFormPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminSupplierForm/>
            <Footer/>
        </div>
    );
}
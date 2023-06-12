import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminSupplierTable from "../components/AdminSupplierTable/AdminSupplierTable";

export default function AdminSupplierListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminSupplierTable/>
            <Footer/>
        </div>
    );
}
import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminProductTable from "../components/AdminProductTable/AdminProductTable";

export default function AdminProductListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminProductTable/>
            <Footer/>
        </div>
    );
}
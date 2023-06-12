import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminOrderTable from "../components/AdminOrderTable/AdminOrderTable";

export default function AdminOrderListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminOrderTable/>
            <Footer/>
        </div>
    );
}
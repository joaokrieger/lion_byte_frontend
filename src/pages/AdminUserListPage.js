import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminUserTable from "../components/AdminUserTable/AdminUserTable";

export default function AdminUserListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminUserTable/>
            <Footer/>
        </div>
    );
}
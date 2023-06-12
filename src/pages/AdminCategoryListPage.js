import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import AdminCategoryTable from "../components/AdminCategoryTable/AdminCategoryTable";

export default function AdminCategoryListPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminCategoryTable/>
            <Footer/>
        </div>
    );
}
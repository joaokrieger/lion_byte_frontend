import React from "react";
import Footer from "../components/Footer/Footer";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminCategoryForm from "../components/AdminCategoryForm/AdminCategoryForm";

export default function AdminCategoryFormPage(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <AdminNavbar/>
            <AdminCategoryForm/>
            <Footer/>
        </div>
    );
}
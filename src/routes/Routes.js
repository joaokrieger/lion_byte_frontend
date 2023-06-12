import React from "react";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserHomePage from "../pages/UserHomePage";
import LoginPage from "../pages/LoginPage";
import UserProductListPage from "../pages/UserProductListPage";
import UserOrderListPage from "../pages/UserOrderListPage";
import RegisterPage from "../pages/RegisterPage";
import UserEditPage from "../pages/UserEditPage";
import AdminHomePage from "../pages/AdminHomePage";
import AdminProductListPage from "../pages/AdminProductListPage";
import AdminProductFormPage from "../pages/ProductFormPage";
import AdminSupplierListPage from "../pages/AdminSupplierListPage";
import AdminCategoryListPage from "../pages/AdminCategoryListPage";
import AdminUserListPage from "../pages/AdminUserListPage";
import AdminOrderListPage from "../pages/AdminOrderListPage";

export default function App(){

    return (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage/>} />

            <Route path="/home" element={<UserHomePage/>} />
            <Route path="/produtos" element={<UserProductListPage/>} />
            <Route path="/pedidos" element={<UserOrderListPage/>} />
            <Route path="/minha-conta" element={<UserEditPage/>} />

            <Route path="/admin" element={<AdminHomePage/>} />
            <Route path="/admin/produtos" element={<AdminProductListPage/>} />
            <Route path="/admin/fornecedores" element={<AdminSupplierListPage/>} />
            <Route path="/admin/categorias" element={<AdminCategoryListPage/>} />
            <Route path="/admin/usuarios" element={<AdminUserListPage/>} />
            <Route path="/admin/pedidos" element={<AdminOrderListPage/>} />
            <Route path="/admin/cadastro/produtos" element={<AdminProductFormPage/>} />
          </Routes>
        </Router>
      );
}
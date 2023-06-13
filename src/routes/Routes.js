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
import AdminSupplierListPage from "../pages/AdminSupplierListPage";
import AdminCategoryListPage from "../pages/AdminCategoryListPage";
import AdminUserListPage from "../pages/AdminUserListPage";
import AdminOrderListPage from "../pages/AdminOrderListPage";
import AdminProductFormPage from "../pages/AdminProductFormPage";
import AdminCategoryFormPage from "../pages/AdminCategoryFormPage";
import AdminSupplierFormPage from "../pages/AdminSupplierFormPage";

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

            <Route path="/admin/cadastro/categorias/" element={<AdminCategoryFormPage />}/>
            <Route path="/admin/cadastro/categorias/:id_categoria" element={<AdminCategoryFormPage />}/>
            <Route path="/admin/cadastro/fornecedores/" element={<AdminSupplierFormPage />}/>
            <Route path="/admin/cadastro/fornecedores/:id_fornecedor" element={<AdminSupplierFormPage />}/>
          </Routes>
        </Router>
      );
}
import React, { useContext } from "react";
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
import UserProductDetailsPage from "../pages/UserProductDetailsPage";
import UserShopCartPage from "../pages/UserShopCartPage";
import UserOrderDetailsPage from "../pages/UserOrderDetailsPage";
import AdminOrderDetailsPage from "../pages/AdminOrderDetails";

import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
          {isAuthenticated && (
            <>
              <Route path="/home" element={<UserHomePage />} />
              <Route path="/produtos" element={<UserProductListPage />} />
              <Route path="/produtos/:id_produto" element={<UserProductDetailsPage />} />
              <Route path="/pedidos" element={<UserOrderListPage />} />
              <Route path="/pedidos/:id_pedido" element={<UserOrderDetailsPage />} />
              <Route path="/minha-conta" element={<UserEditPage />} />
              <Route path="/carrinho-compras" element={<UserShopCartPage />} />
            </>
          )}

          {isAuthenticated && isAdmin && (
            <>
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/admin/produtos" element={<AdminProductListPage />} />
              <Route path="/admin/fornecedores" element={<AdminSupplierListPage />} />
              <Route path="/admin/categorias" element={<AdminCategoryListPage />} />
              <Route path="/admin/usuarios" element={<AdminUserListPage />} />
              
              <Route path="/admin/pedidos" element={<AdminOrderListPage />} />
              <Route path="/admin/pedidos/:id_pedido" element={<AdminOrderDetailsPage />} />
              <Route path="/admin/cadastro/produtos" element={<AdminProductFormPage />} />
              <Route path="/admin/cadastro/produtos/:id_produto" element={<AdminProductFormPage />} />
              <Route path="/admin/cadastro/categorias/" element={<AdminCategoryFormPage />} />
              <Route path="/admin/cadastro/categorias/:id_categoria" element={<AdminCategoryFormPage />} />
              <Route path="/admin/cadastro/fornecedores/" element={<AdminSupplierFormPage />} />
              <Route path="/admin/cadastro/fornecedores/:id_fornecedor" element={<AdminSupplierFormPage />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;

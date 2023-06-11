import React from "react";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductListPage from "../pages/ProductListPage";
import OrderListPage from "../pages/OrderListPage";
import RegisterPage from "../pages/RegisterPage";
import UserEditPage from "../pages/UserEditPage";

export default function App(){

    return (
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/produtos" element={<ProductListPage/>} />
            <Route path="/pedidos" element={<OrderListPage/>} />
            <Route path="/minha-conta" element={<UserEditPage/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
      );
}
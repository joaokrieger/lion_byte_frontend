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

            <Route path="admin" element={<AdminHomePage/>} />
          </Routes>
        </Router>
      );
}
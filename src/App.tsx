import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Overview } from "./pages/Overview";
import { Market } from "./pages/Market";
// import { useState } from "react";
import { Admin } from "./pages/Admin";
import { Reward } from "./pages/Reward";
import { Signin } from "./pages/Signin";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/market" element={<Market />} />
      <Route path="/rewards" element={<Reward />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

import "bootstrap/dist/css/bootstrap.min.css";


import App from "./App";
import Cart from "./components/Cart/Cart";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="about" element="About" />
      </Route>
    </Routes>    
  </BrowserRouter>
  );
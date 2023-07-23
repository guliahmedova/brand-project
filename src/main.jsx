import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/common/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Categories from './components/pages/Categories';
import NotFound from './components/common/NotFound';
import MyCart from './components/pages/MyCart';
import ProductDetail from './components/pages/ProductDetail';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='mycart' element={<MyCart />} />
    <Route path='categories' element={<Categories />} />
    <Route path='categories/:productId' element={<ProductDetail />} />
    <Route path='notfound' element={<NotFound />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
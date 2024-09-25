import { useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
 
import Home from './pages/home/home'
import Layout from './pages/layout/layout'
import About from './pages/about/about.jsx'
import ProductDetail from './pages/productDetail/productDetail.jsx'
 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
      path: "/about",
      element: <About />
    },
    {
      path: "/product",
      element: <ProductDetail />
    }
      ]
    },
   
  ])
  return (
    
    <RouterProvider router={router} />
   
  );
}
 

export default App

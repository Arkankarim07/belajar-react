import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/login.jsx'
import { RegisterPage } from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import { ProductPage } from './pages/product.jsx'
import { ProfilePage } from './pages/profile.jsx'
import { DetailProductPage } from './pages/detailProduct.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />
    },
    {
      path: "/product/detail/:id",
      element: <DetailProductPage />
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

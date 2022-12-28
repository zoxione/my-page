import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)

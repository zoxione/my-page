import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import './index.scss'

import "@fontsource/ubuntu";
import ComponentsPreview from './components/pages/components-preview/ComponentsPreview'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/components-preview",
    element: <ComponentsPreview />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)

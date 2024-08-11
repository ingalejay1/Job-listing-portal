import React from 'react'
import ReactDOM, {Route} from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Layout from './Layout.jsx'
import Detail from './Pages/Detail.jsx'
import Listing from './Components/Listing/Listing.jsx'
import JobForm from './Components/JobForm/JobForm.jsx'
import JobListing from './Pages/Listing.jsx'
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <JobListing />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "detail",
        element: <Detail />
      },
      {
        path: "listing",
        element: <Listing />
      },
      {
        path: "jobform",
        element: <JobForm />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

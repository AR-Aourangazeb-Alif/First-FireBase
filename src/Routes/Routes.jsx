import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Contacts from "../pages/Contacts"
import Login from "../pages/Login"

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      },

    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
  }
])
export default router
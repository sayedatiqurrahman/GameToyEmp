import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllToys from './Components/Pages/AllToys.jsx'
import AddToys from './Components/Pages/AddToys.jsx'
import MyToys from './Components/Pages/MyToys.jsx'
import Blog from './Components/Pages/Blog.jsx'
import Home from './Components/Pages/Home.jsx'
import Login from './Components/Pages/Login.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import ToysDetails from './Components/Pages/ToysDetails.jsx'
import SignUp from './Components/Pages/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/toysDetails/:id',
        element: <ToysDetails />,
        loader: ({ params }) => fetch(`https://server-liard-nine.vercel.app/ToyDetails/${params.id}`)
      },
      {
        path: '/allToys',
        element: <AllToys />,
        loader: () => fetch(`https://server-liard-nine.vercel.app`)
      },
      {
        path: '/addToys',
        element: <AddToys />
      },
      {
        path: '/myToys',
        element: <MyToys />
      },
      {
        path: '/blog',
        element: <Blog />
      }, {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

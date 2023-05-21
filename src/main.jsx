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
import AuthProvider from './Components/Provider/AuthProvider.jsx'
import PrivateRoute from './Components/Route/PrivateRoute.jsx'

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
        element: <PrivateRoute><ToysDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-liard-nine.vercel.app/ToyDetails/${params.id}`)
      },
      {
        path: '/allToys',
        element: <PrivateRoute><AllToys /></PrivateRoute>,
        loader: () => fetch(`https://server-liard-nine.vercel.app`)
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToys /></PrivateRoute>
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
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage.jsx'
import AllToys from './Pages/AllToys.jsx'
import AddToys from './Pages/AddToys.jsx'
import MyToys from './Pages/MyToys.jsx'
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/allToys',
        element: <AllToys />
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

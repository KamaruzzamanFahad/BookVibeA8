import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import ErrorPage from './Component/Error-page.jsx';
import Home from './Component/Home.jsx';
import LIstedBook from './Component/Listed-book.jsx';
import ReadPage from './Component/Read_page.jsx';
import Book_Detil from './Component/Book_Detil.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/listed-book',
        element:<LIstedBook></LIstedBook>
      },
      {
        path:"/read-page",
        element:<ReadPage></ReadPage>
      },
      {
        path:'/book_detil',
        element:<Book_Detil></Book_Detil>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

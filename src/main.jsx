import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Category from './Components/Category/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:"/brands",
        element:<Category></Category>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)

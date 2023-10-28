import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import { createHashRouter, RouterProvider} from "react-router-dom";
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Error from './components/Error';
import ProductDetails from './components/ProductDetails';

const appRouter= createHashRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
    element:<Products/>,
      },
      {
        path:"/login",
    element:<Login/>
      },{
        path:"/login",
    element:<Login/>
      },
      {
        path:"/signup",
    element:<Signup/>
      },
      {
        path:"/contact",
    element:<Contact/>
      },
      {
        path:"/cart",
    element:<Cart/>,
      },
      {
        path:"/addProduct",
    element:<AddProduct/>
      },
      {
        path:"/product/:id",
    element:<ProductDetails/>,
      },

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);


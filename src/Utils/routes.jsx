import Pages from "../Pages/pages.jsx";
import Register from "../Pages/Public/register.jsx";
import Login from "../Pages/Public/login.jsx";
import {Navigate} from "react-router-dom";
import Home from "../Pages/PrivatePages/home.jsx";
import About from "../Pages/PrivatePages/about.jsx";
import Contact from "../Pages/PrivatePages/contact.jsx";
import AddProduct from "../Pages/PrivatePages/AddProduct.jsx";
import Products from "../Pages/PrivatePages/products.jsx";


export const REGISTER_PAGE = "/register"
export const LOGIN_PAGE = "/login"
export const HOME_PAGE = "/"
export const ABOUT_PAGE = "/about"
export const CONTACT_PAGE = "/contact"
export const ADDPRODUCT_PAGE = "/addproduct"
export const PRODUCTS_PAGE = "/products"

export const Public_Routes=[
    {path:REGISTER_PAGE, element: <Register /> ,name:"Register"},
    {path:LOGIN_PAGE, element: <Login/> ,name:"Login"},
    {path:"*", element: <Navigate to={LOGIN_PAGE}/>}
]
export const Private_Routes=[
    {path:HOME_PAGE, element: <Home /> ,name:"Home"},
    {path: ABOUT_PAGE, element: <About /> ,name:"About"},
    {path:CONTACT_PAGE, element: <Contact />,name:"Contact"},
    {path:ADDPRODUCT_PAGE, element: <AddProduct />,name:"AddProduct"},
    {path: PRODUCTS_PAGE, element: <Products />, name: "Products"},
    {path:"*", element: <Navigate to={HOME_PAGE}/>}
]
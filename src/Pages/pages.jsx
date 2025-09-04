import React from 'react';
import {useRoutes} from "react-router-dom";
import {Private_Routes, Public_Routes} from "../Utils/routes.jsx";

const Pages = () => {
    const token = localStorage.getItem("token");
    return (
        <div className={`${!token ? "min-h-[90vh]" :"min-h-[80vh]"}`}>
            {
                useRoutes(token ? Private_Routes : Public_Routes)
            }
        </div>
    );
};

export default Pages;
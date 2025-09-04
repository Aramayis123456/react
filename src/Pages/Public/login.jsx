import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
    function localTag (){
        localStorage.setItem("token", "user");
        window.location.reload();

    }
    return (
        <div>
            <a href="/home"><button onClick={localTag}>Login</button></a>
        </div>
    );
};

export default Login;
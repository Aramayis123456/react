import React from 'react';
import {Link} from "react-router-dom";
const Register = () => {
    return (
        <div className="flex justify-center items-center text-green-950  font-bold " >
            <Link to={"/login"}>Register</Link>
        </div>
    );
};

export default Register;
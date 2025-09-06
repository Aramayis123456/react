import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {Private_Routes} from "../../Utils/routes.jsx";

const Nav = () => {

    return (
            <ul className="flex justify-evenly gap-2 w-full">
                {Private_Routes.map((route, idx) => (
                    <li key={idx}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}

            </ul>


    );
};
export default Nav;
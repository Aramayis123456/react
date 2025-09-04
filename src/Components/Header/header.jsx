import React from 'react';
import Nav from "./nav.jsx";

const Header = () => {
    return (
        <div className="Header">
        <div className="w-[95%] h-[50%] bg-amber-100 flex items-center rounded-2xl" >
            <Nav/>
        </div>
        </div>
    );
};

export default Header;
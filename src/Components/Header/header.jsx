import React from 'react';
import Nav from "./nav.jsx";

const Header = () => {
    const token = localStorage.getItem('token')
    function logout (){
        localStorage.removeItem('token')
        window.location.reload()
    }
    return (
        <div className="h-[10vh] w-full flex
        gap-4 px-8
        items-center justify-between bg-amber-900">

                <Nav/>

                <button onClick={logout}>Log out</button>
            <span>
                {token}
            </span>
        </div>
    );
};

export default Header;
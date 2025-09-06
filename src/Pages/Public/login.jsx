import React, {useEffect, useState} from 'react';

import {REGISTER_PAGE} from "../../Utils/routes.jsx";
import {Link} from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("email")
    const [password, setPasword] = useState("")
    const [error, setError] = useState('')
   const [users, setUsers] = useState([])
    async function fetchUsers() {
        try{
            const response = await axios.get("http://localhost:4000/users")
            const data = await response.data
            setUsers(data)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    function handleLogin(e) {
        e.preventDefault()

        if (email !== "" && password !== ''){
            const findUser = users.find(user => (user.username === email ||
                user.email === email) && user.password === password)
            if (findUser){
                localStorage.setItem('token', findUser.username)
                window.location.reload()

            }else {
                setError('user not found')
            }

        }else {
           setError("input is empty")
        }

    }
    return (
        <div className="flex justify-center h-[90vh]
         items-center text-green-950  font-bold ">

            <form
                onSubmit={handleLogin}
                className='w-[25%] p-4 min-h-[40vh]
                rounded-2xl
                 flex justify-center items-center gap-4
                flex-col border bordr-black'
                action="">
                <h1>Login</h1>

                {error !== '' && (
                    <span>{error}</span>
                )}
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type="text"
                    placeholder="Email or Username"/>
                <input
                    onChange={(e) => {
                        setPasword(e.target.value)
                    }}
                    type="password"
                    placeholder="Password"/>

                <button type="submit">
                    Login
                </button>
                <Link to={REGISTER_PAGE}>Don't have an Account</Link>

            </form>


        </div>
    );
};

export default Login;
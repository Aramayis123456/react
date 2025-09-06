import React, {useEffect, useState} from 'react';
import {data, Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../Utils/routes.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
import Input from "../../Components/UI/Input.jsx";
import {emailValidation, passwordValidation, userNameValidation} from "../../Utils/validation.js";
const Register = () => {

    const [users, setUsers] = useState([])
    async function fetchUsers() {
        try{
            const response = await axios.get("http://localhost:4000/users")
            const data_info = await response.data
            setUsers(data_info)
        }catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, []);

  async  function handleRegister(data, e) {
        e.preventDefault()
        const {username, email, password} = data
      console.log(username, email, password)
        if (username !== "" && email !== "" && password !== ''){
           const findUser = users.some(user => user.username === username || user.email === email)
           if (!findUser){
               const newUser = {
                   username,
                   email,
                   password
               }
              try {
                  const response = await axios.post("http://localhost:4000/users", newUser)
                  console.log(response)
                  fetchUsers()

              }catch (e){
                  console.log(e.message)
              }
               alert('okkk')
           }else {
               console.error('user already exists')
           }

        }else {
            console.error("input is empty")
        }

    }
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({mode: 'all'});


    return (
        <div className="flex justify-center h-[90vh]
         items-center text-green-950  font-bold " >

            <form
                onSubmit={handleSubmit(handleRegister)}
                className='w-[25%] p-4 min-h-[40vh]
                rounded-2xl
                 flex justify-center items-center gap-4
                flex-col border bordr-black'
                action="" >
                <h1>Register</h1>
                <Input
                register={register}
                name='username'

                placeholder='Username'
                validation={userNameValidation}
                error={errors.username && errors.username.message}
                />
                <Input
                    register={register}
                    name='email'
                    placeholder='Email'
                    validation={emailValidation}
                    error={errors.email && errors.email.message}
                />
                <Input
                    register={register}
                    name='password'
                    type='password'
                    placeholder='Password'
                    validation={passwordValidation}
                    error={errors.password && errors.password.message}
                />

                <button
                    disabled={!isValid}
                    type="submit">
                    Register
                </button>
                <Link to={LOGIN_PAGE}>Have an Account</Link>

            </form>


        </div>
    );
};

export default Register;
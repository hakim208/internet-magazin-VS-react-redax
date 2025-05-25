import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from "sonner";
import axios from 'axios';

const Login = () => {
    const [addName, setAddName] = useState("")
    const [addPasword, setAddPasword] = useState("")
    let API = import.meta.env.VITE_API_URL
    let navigation = useNavigate()

    async function login() {
        let newUser = {
            userName: addName,
            password: addPasword
        }
        try {
            let { data } = await axios.post(`${API}/Account/login`, newUser)
            localStorage.setItem("token", data.data)
            toast.success("", {
                description: (
                    <span className="text-[18px] text-gray-600">
                        Добро пожаловать <span className='text-[20px] text-red-500 '>{addName}!</span>
                    </span>
                ),
                duration: 10000,
            });
            window.location = '/'
            navigation("/")
            return data
        } catch (error) {
            toast.error("Неверное имя пользователя или пароль");
            console.error(error);
        }
    }
    return (
        <div>
            <div className='flex flex-col gap-[10px] items-start md:ml-[34.5%] ml-[3%] m-[100px_0px_30px_0px] '>
                <p className=' text-[30px] md:text-[40px]  font-[600] '>Log in to Exclusive</p>
                <p>Enter your details below</p>
            </div>
            <div class="flex flex-col items-center mb-[100px]">
                <form role="form text-left">
                    <div class="mb-4">
                        <input value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Name" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-[10px] px-3 pr-[200px] md:pr-[300px] font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                    </div>
                    <div class="mb-4">
                        <input type='password' value={addPasword} onChange={(e) => setAddPasword(e.target.value)} aria-describedby="password-addon" aria-label="Password" placeholder="Password" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                    </div>
                    <div>
                        <Link to='/signup'>
                            <p class="inline-block text-red-500 py-3 font-bold text-center  uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl">Forget Password?</p>
                        </Link>
                    </div>
                    <div class="text-center">
                        <button onClick={login} class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#DB4444] to-[#f07979] hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

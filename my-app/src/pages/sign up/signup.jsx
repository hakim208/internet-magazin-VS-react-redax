import React, { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from "sonner";
import axios from 'axios';

const Signup = () => {

  let API = import.meta.env.VITE_API_URL
  const [addName, setAddName] = useState("")
  const [addPhone, setAddPhone] = useState("")
  const [addEmail, setAddEmail] = useState("")
  const [addPasword, setAddPasword] = useState("")
  const [addConfi, setAddConfi] = useState("")

  let navigation = useNavigate()
  let dispach = useDispatch()

  async function siginup() {
    let newUser = {
      userName: addName,
      phoneNumber: addPhone,
      email: addEmail,
      password: addPasword,
      confirmPassword: addConfi
    }
    try {
      let { data } = await axios.post(`${API}/Account/register`, newUser)
      toast.success("", {
        description: (
          <span className="text-[18px] text-gray-600">
            Зарегистрировано успешно!
          </span>
        ),
        duration: 10000,
      });
      navigation("/login")
      return data
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при регистрации");
    }
  }
  return (
    <div>
      <div className='flex flex-col gap-[10px] items-start md:ml-[34.5%] ml-[3%] m-[100px_0px_30px_0px] '>
        <p className=' text-[30px] md:text-[40px]  font-[600] '>Create an account</p>
        <p>Enter your details below</p>
      </div>
      <div class="flex flex-col items-center mb-[100px]">
        <form role="form text-left">
          <div class="mb-4">
            <input value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Name" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-[10px] px-3 pr-[200px] md:pr-[300px] font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          </div>
          <div class="mb-4">
            <input value={addPhone} onChange={(e) => setAddPhone(e.target.value)} placeholder="Phone" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-[10px] px-3 pr-[200px] md:pr-[300px] font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          </div>
          <div class="mb-4">
            <input value={addEmail} onChange={(e) => setAddEmail(e.target.value)} placeholder="Email" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-[10px] px-3 pr-[200px] md:pr-[300px] font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          </div>
          <div class="mb-4">
            <input type='password' value={addPasword} onChange={(e) => setAddPasword(e.target.value)} aria-describedby="password-addon" aria-label="Password" placeholder="Password" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          </div>
          <div class="mb-4">
            <input type='password' value={addConfi} onChange={(e) => setAddConfi(e.target.value)} aria-describedby="password-addon" aria-label="Confirm Password" placeholder="Confirm Password" class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-[3px] border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          </div>
          <div class="text-center">
            <button class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#DB4444] to-[#f07979] hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button" onClick={siginup} >Sign up</button>
          </div>
          <p class="mt-4 mb-0 leading-normal text-sm">Already have an account? <Link to='/login'><span className='border-b-2'>Log in</span></Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfil, userProfilById } from '../../entities/counter/counterSlece'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Account = () => {
  const dispach = useDispatch()
  const user = useSelector((state) => state.counter.user)

  const [editImg, setEditImg] = useState("")
  const [editName, setEditName] = useState("")
  const [editLastName, setEditLastName] = useState("")
  const [editEmaiil, setEditEmaiil] = useState("")
  const [editPhone, setEditPhone] = useState("")
  const [editDob, setEditDob] = useState("")

  let API = import.meta.env.VITE_API_URL
  function edituser(e) {
    e.preventDefault()
    let form = new FormData()
    form.append("Image", editImg)
    form.append("FirstName", editName)
    form.append("LastName", editLastName)
    form.append("Email", editEmaiil)
    form.append("PhoneNumber", editPhone)
    form.append("Dob", editDob)
    dispach(editUserProfil(form))
  }

  useEffect(() => {
    dispach(userProfilById())
  }, [])
  useEffect(() => {
    if (user) {
      setEditImg(user.image || '')
      setEditName(user.firstName || '')
      setEditLastName(user.lastName || '')
      setEditEmaiil(user.email || '')
      setEditPhone(user.phoneNumber || '')
      setEditDob(user.dob || '')
    }
  }, [user])
  return (
    <div className='mt-[100px] w-[90%] m-auto mb-[70px] '>
      <p className='text-gray-400 text-[13px] '>Home / <span className='text-black '>My Account</span> </p>
      <div className='flex flex-col items-start md:flex-row justify-between gap-[30px] mt-[30px] '>
        <div className='flex flex-col items-start gap-[10px] '>
          <p className='text-[15px] font-medium '>Manage My Account</p>
          <div className='flex flex-col ml-[20px] gap-[4px] text-gray-400 '>
            <p className='text-red-500 '>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </div>
          <p className='text-[15px] font-medium '>My Orders</p>
          <div className='flex flex-col ml-[20px] gap-[4px] text-gray-400 '>
            <p>My Returns</p>
            <p>My Cancellations</p>
          </div>
          <p className='text-[15px] font-medium '>My WishList</p>
        </div>
        <form onSubmit={edituser} className='md:w-[70%] w-[100%] p-[20px] shadow-2xl flex flex-col items-start gap-[20px] '>
          <p className='text-[#DB4444] text-[20px] font-medium '>Profile</p>
          <img className='w-[100px] h-[100px] rounded-[50%] m-auto absolute ml-[27%] mt-[-16%] md:mt-[-4%]  ' src={`${API}/images/${editImg}`} alt="" />
          <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
            <input value={editName} onChange={(e) => setEditName(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" />
            <input value={editLastName} onChange={(e) => setEditLastName(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Last name' />
          </div>
          <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
            <input value={editEmaiil} onChange={(e) => setEditEmaiil(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Email address' />
            <input value={editPhone} onChange={(e) => setEditPhone(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Phone namber' />
          </div>
          <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
            <input value={editDob} onChange={(e) => setEditDob(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Dob' />
            <input onChange={(e) => setEditImg(e.target.files[0])} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="file" />
          </div>
          <div className='flex items-center w-[100%] justify-end mt-[20px] gap-[20px] '>
            <button>Cancel</button>
            <button type='submit' className='bg-[#DB4444] md:p-[15px_60px] p-[13px_30px] rounded-[5px] text-white '>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Account

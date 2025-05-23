import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfil, userProfilById } from '../../entities/counter/counterSlece'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Account = () => {
  const dispach = useDispatch()
  const user = useSelector((state) => state.counter.user)
  const editUser = useSelector((state) => state.counter.editUser)
  console.log(user);

  const [editImg, setEditImg] = useState(user.image)
  const [editName, setEditName] = useState(user.firstName)
  const [editLastName, setEditLastName] = useState(user.lastName)
  const [editEmaiil, setEditEmaiil] = useState(user.email)
  const [editPhone, setEditPhone] = useState(user.phoneNumber)
  const [editDob, setEditDob] = useState(user.dob)

  function edituser() {
    const User = {
      Image: editImg,
      FirstName: editName,
      LastName: editLastName,
      Email: editEmaiil,
      PhoneNumber: editPhone,
      Dob: editDob
    }
    dispach(editUserProfil(User))
  }

  console.log(user.firstName);
  

  useEffect(() => {
    dispach(userProfilById())
  }, [])
  return (
    <div className='mt-[100px] w-[90%] m-auto mb-[70px] '>
      <p className='text-gray-400 text-[13px] '>Home / <span className='text-black '>My Account</span> </p>
      <div className='md:w-[70%] w-[100%] p-[20px] shadow-2xl flex flex-col items-start gap-[20px] '>
        <p className='text-[#DB4444] text-[20px] font-medium '>Profile</p>
        <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
          <input value={editName} onChange={(e) => setEditName(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='First name' />
          <input value={editLastName} onChange={(e) => setEditLastName(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Last name' />
        </div>
        <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
          <input value={editEmaiil} onChange={(e) => setEditEmaiil(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Email address' />
          <input value={editPhone} onChange={(e) => setEditPhone(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Phone namber' />
        </div>
        <div className='w-[100%] flex flex-col md:flex-row justify-between gap-[20px] '>
          <input value={editDob} onChange={(e) => setEditDob(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" placeholder='Dob' />
          <input value={editImg} onChange={(e) => setEditImg(e.target.value)} className='border-2 border-gray-300  p-[10px] rounded-[5px] md:w-[50%] ' type="text" />
        </div>
        <div className='flex items-center w-[100%] justify-end mt-[20px] gap-[20px] '>
          <button>Cancel</button>
          <button onClick={edituser} className='bg-[#DB4444] md:p-[15px_60px] p-[13px_30px] rounded-[5px] text-white '>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Account

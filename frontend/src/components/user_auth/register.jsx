import React, { useEffect, useState } from 'react'
import {BaseUrl} from "../../../axios.js"
import {toast} from 'react-toastify'
import {Link, useNavigate } from 'react-router-dom'

function Register() {
  const [onsignup, setonSignup] = useState({
    name:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()
  const userAuth = localStorage.getItem('userAuth')
  const authUser = JSON.parse(userAuth)

  useEffect(()=>{
    if(authUser?.isLogin){
      navigate('/')
    }
  },[])
  
  const handleChange = (e)=>{
    const {name,value} = e.target
    setonSignup((prev)=>({...prev, [name]:value}))
  }

  const handleSignup = async(e)=>{
    e.preventDefault()
    try {
      const {data} = await BaseUrl.post("/user/register",onsignup)
      if(data.success || data.Success)
        toast.success("User Registered Successfully")
        navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSignup}>
        <h1  className="text-2xl font-bold mb-4 text-center">SignUp</h1>
    <input className='w-full border px-3 py-2 mb-3 rounded' type='text' placeholder='Enter Your Name' name='name' value={onsignup.name} onChange={handleChange} />
    <input className='w-full border px-3 py-2 mb-3 rounded' type='email' placeholder='Enter Your Email' name='email' value={onsignup.email} onChange={handleChange} />
    <input className='w-full border px-3 py-2 mb-3 rounded' type='password' placeholder='Enter Your Password' name='password' value={onsignup.password} onChange={handleChange} />

    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">SignUp</button>
    <p className='text-center text-sm mt-4'>
      Already Registered?{" "}
      <Link to='/login' className='text-blue-600 hover:underline'>LogIn</Link>
    </p>
    
    </form>

    
    </div>
  )
}

export default Register
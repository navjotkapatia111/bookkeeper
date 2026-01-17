import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../../axios'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function Login() {
  const [loginform, setLoginform] = useState({
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

  const handleLogin = async(e)=>{
    e.preventDefault();
    if(!loginform.password   || !loginform.email){
      toast.warn("Missing Fields");
      return;
    }
 
    try {
      const data = await BaseUrl.post("/user/login",loginform)

      if(!data.data.success ){
        toast.error("Invalid Credentials");
        return;
      }
      const authData = {
        isLogin:true,
        token:data.data.token
      }
      
      localStorage.setItem("userAuth", JSON.stringify(authData))
      toast.success("Login Successful")
      navigate("/")
      
    } catch (error) {
      console.log(error.message)
      toast.error("Invalid Credentials");
    }
  }
  
  const handleChange = (e)=>{
    const {name,value} = e.target
    setLoginform((prev)=>({...prev, [name]:value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input className='w-full border px-3 py-2 mb-3 rounded' type='email' placeholder='Enter Your Email' name='email' value={loginform.email} onChange={handleChange}/>
        <input className='w-full border px-3 py-2 mb-3 rounded' type='password' placeholder='Enter Your Password' name='password' value={loginform.password} onChange={handleChange}/>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">SignIn </button>
        <p className='text-center text-sm mt-4'>
      Don't have account?{" "}
      <Link to='/signup' className='text-blue-600 hover:underline'>SignUp</Link>
    </p>
    </form>
    
    
    </div>
  )
}

export default Login
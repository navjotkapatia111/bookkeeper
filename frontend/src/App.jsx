import React from "react";
import Home from "./components/pages/Home.jsx";
import Login from "./components/user_auth/login.jsx";
import Register from "./components/user_auth/register.jsx";
import { Route, Routes } from "react-router-dom";
import Protectedroutes from "./components/protected_routes.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

export const App = ()=>{
  return(
    <Routes>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={
      <Protectedroutes>
        <Home/>
      </Protectedroutes>
      }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}
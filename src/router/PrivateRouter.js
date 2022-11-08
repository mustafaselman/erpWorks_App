import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from "react"
import {UserContext} from "../context/UserContext.js"
import UserProvider from '../context/UserContext.js';

function PrivateRouter() {

    const user =  useContext(UserContext);
        console.log(user)

  return user ? <Outlet/> : <Navigate to="/"/>

    
        
            
            
        
     
    
  
}

export default PrivateRouter
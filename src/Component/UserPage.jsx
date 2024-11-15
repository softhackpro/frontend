import React, { useState, useEffect } from 'react'
import { useAuth } from "./stores/Auth";
import axios from 'axios';
import { CiMenuBurger } from "react-icons/ci";
import ListItems from './LoginFolder/ListItems';
import Profile from './LoginFolder/Profile';
import ImportantMsg from './LoginFolder/ImportantMsg';
import { Link, Navigate } from 'react-router-dom';


const UserPage = () => {
  const {isLoggedIn, user} = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(user);
  const value = user.email;
  const [info, setInfo] = useState([])
  const [state, setState] = useState('certificates');
  if(!isLoggedIn){
    return <Navigate to="/Login"/>
  }
const fetchUser = async() =>{
  const res = await axios.post(`${backendUrl}/api/userDetail`,{value});
  setInfo(res.data)
  
}
  const handleInput = (e) =>{
    setState(e)
  }
  useEffect(() =>{
    if(user.email){
      fetchUser(); 
    }
    
  },[user])
  return (
    <>
    
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    <CiMenuBurger />
</button>
      {state === 'me' ? (<Profile></Profile>):null} 
      {state === 'certificates' ? (<ListItems info={info} info1={'Certificates'}/>):null}
      {state === 'payment' ? (<ImportantMsg></ImportantMsg>):null}

<div className="offcanvas offcanvas-start bhuioooo" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">{user.fullname}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      <ul>
        <Link className='text-decoration pe-auto' to='/'><li>Go To Website</li></Link>
        <li className='cursorhand' onClick={()=>handleInput('me')}>About Me</li>
        <li className='cursorhand' onClick={()=>handleInput('certificates')}>Certificates</li>
        {/* <li className='cursorhand' onClick={()=>handleInput('payment')}>Fee Payment</li> */}
      </ul>
    </div>
  </div>
</div>
</>
  )
}

export default UserPage

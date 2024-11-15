import React, { useEffect, useState } from 'react';
import { useAuth } from "../stores/Auth";
import { CiMenuBurger } from "react-icons/ci";
import AddStudent from './AddStudent';
import AddPhotos from './AddPhotos';
import AddSocialMedia from './AddSocialMedia';
import AddNotice from './AddNotice';
import ShowStudents from './ShowStudents';
import ShowEvents from './ShowEvents';
import RecentPay from './RecentPay';
const AdminPage = () => {
  const [state, setState] = useState('notice')
  const {user} = useAuth();
  const handleInput = async(e) =>{
    setState(e)
  }
  
  return (
    <>
    {(user.role === "Chairman" || (user.role === "Secretary"))? (<><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    <CiMenuBurger />
</button>

      {state === 'student' ? (<AddStudent></AddStudent>):null} 
      {state === 'allstudent' ? (<ShowStudents value={"member"}/>):null}
      {state === 'allteacher' ? (<ShowEvents value={"notice"}/>):null}
      {state === 'addteacher' ? (<AddNotice value={"faq"}/>):null} 
      {state === 'photos' ? (<AddPhotos value={"gallery"}/>):null}
      {state === 'addevents' ? (<AddPhotos value={"events"}/>):null}
      {state === 'unpaid' ? (<AddPhotos value={"pen"}/>):null}
      {state === 'allevents' ? (<ShowEvents value={"events"}/>):null} 
      {state === 'allphotos' ? (<ShowEvents value={"gallery"}/>):null}
      {state === 'addswiper' ? (<AddPhotos value={"swiper"}/>):null}
      {state === 'notice' ? (<AddNotice value={"notice"}/>):null}
      {state === 'fee' ? (<ShowEvents value={"swiper"}/>):null}
      {state === 'addcertificates' ? (<AddPhotos value={"certificates"}/>):null}
      {state === 'allpay' ? (<RecentPay></RecentPay>):null}
      {state === 'media' ? (<AddSocialMedia></AddSocialMedia>):null}
      {state === 'page' ? (<AddNotice value={"page"}/>):null}
      {state === 'allpage' ? (<ShowEvents value={"page"}/>):null}

<div className="offcanvas offcanvas-start bhuioooo" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Your Panel</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      <ul>
        <div className="d-grid gap-2">
        <button onClick={()=>handleInput('student')} className="btn btn-outline-primary" type="button">Add Member</button>
        <button onClick={()=>handleInput('notice')} className="btn btn-outline-primary" type="button">Add Important Notice</button>
        <button onClick={()=>handleInput('photos')} className="btn btn-outline-primary" type="button">Add Photos</button>
        <button onClick={()=>handleInput('addevents')} className="btn btn-outline-primary" type="button">Add Events</button>
        <button onClick={()=>handleInput('addswiper')} className="btn btn-outline-primary" type="button">Add Swiper Photos</button>
        <button onClick={()=>handleInput('addcertificates')} className="btn btn-outline-primary" type="button">Add Certificates</button>
        <button onClick={()=>handleInput('page')} className="btn btn-outline-primary" type="button">Add Pages</button>
        <button onClick={()=>handleInput('unpaid')} className="btn btn-outline-primary" type="button">Add Pen</button>
        <button onClick={()=>handleInput('addteacher')} className="btn btn-outline-primary" type="button">Add FAQ</button>
        <button onClick={()=>handleInput('allstudent')} className="btn btn-outline-success" type="button">Show Member</button>
        <button onClick={()=>handleInput('allteacher')} className="btn btn-outline-success" type="button">Show Notice</button>
        <button onClick={()=>handleInput('allphotos')} className="btn btn-outline-success" type="button">Show Photos</button>
        <button onClick={()=>handleInput('allevents')} className="btn btn-outline-success" type="button">Show Events</button>
        <button onClick={()=>handleInput('fee')} className="btn btn-outline-success" type="button">Show Swiper</button>
        <button onClick={()=>handleInput('allpage')} className="btn btn-outline-success" type="button">Show Pages</button>
        </div>
        </ul>
    </div>
  </div>
</div></>): <h1>Not Authorised</h1> }
    
</>
  )
}

export default AdminPage
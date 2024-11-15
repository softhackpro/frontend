import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";
const ShowEvents = ({value}) => {
  const [info, setInfo] = useState([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getData = async() =>{
     const res =  await axios.post(`${backendUrl}/api/getvalue`, {value})
     console.log(res.data);
     setInfo(res.data) 
  }
  const handleDelete = async(_id) =>{
   const res = await axios.delete(`${backendUrl}/api/deletepost/${_id}`);
    console.log(res.data.message);
    
    setInfo(info.filter(item => item._id !== _id));
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-2 display-5 text-center text-capitalize">{value}</h2>
          <p className="text-secondary mb-2 text-center">All India Dusadh Pariwar</p>
        </div>
      </div>
    </div>
  
    <div className="container">
      <div className="row justify-content-lg-center">
        <div className="col-12 col-lg-9">
          <div className="bg-white border rounded shadow-sm overflow-hidden">
            <div>
              <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                

              <div className="list-group">
                {info.map((item)=>(<div className="list-group-item list-group-item-action list-group-item-primary mt-1 ">
                 <img style={{height:'35px', width:'35px'}} src={`${backendUrl}/${item.Photo}`} alt="" /> <span className='text-secondary'>{item.Title}</span> <AiFillDelete onClick={()=>handleDelete(item._id)} style={{float:'right', marginTop:'4px', height:'25px', width:'25px', color:'red'}} />
                 </div>))}
                 
              </div>
                


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ShowEvents
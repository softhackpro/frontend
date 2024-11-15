import React, { useState } from 'react'
import { ImCloudDownload } from "react-icons/im";
const ListItems = ({info, info1}) => {
  
  const [state, setState] = useState(false);
  const [value, setValue] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleResult = (e) => {
    setValue(e)
    setState(!state)
  }
  const cutstate = ()=>{
    setState(!state)
  }
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
    <section className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-2 display-5 text-center">{info1}</h2>
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
                {info.map((item)=>(
                  <>
                  <div key={item._id} className="list-group-item list-group-item-action list-group-item-primary mt-1 ">
                 <img style={{height:'35px', width:'35px'}} src={`${backendUrl}/${item.Photo}`} alt="" /> <span className='text-secondary'>{item.Title}</span> <a href={`http://localhost:5000/${item.Photo}`} download={`AIDP Certificate - ${item.Title}`}><ImCloudDownload style={{height:'35px', width:'35px', float:'right'}} /> </a>
                 </div>
                 </>))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default ListItems
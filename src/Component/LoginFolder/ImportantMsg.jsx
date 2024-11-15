import React, {useEffect, useState} from 'react'
import axios from 'axios';
const ImportantMsg = () => {
  const [info, setInfo] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const value = "faq";
  const getvalue = async() =>{
    const res = await axios.post(`${backendUrl}/api/getvalue`,{value})
    setInfo(res.data);
  }
  useEffect(()=>{
    getvalue();
  },[])
  return (

    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-2 display-5 text-center">FAQ</h2>
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
                
               
              <div className="accordion padding20px" id="accordionExample">
             {info.map((item)=>(<div key={item._id} className="accordion-item">
           <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#`+item._id} aria-expanded="true" aria-controls={item._id}>
        {item.Title}
      </button> 
    </h2>
    <div id={item._id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       {item.About}
        </div>
    </div>
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

export default ImportantMsg
import React, {useRef, useState} from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import imageTobase64 from "../helpers/imagetobase64";
import { toast } from 'react-toastify';
const AddPhotos = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [img, setImg] = useState(null)
  const [image, setImage] = useState(null)
  const editor = useRef(null);
	const [content, setContent] = useState(null);
  const Type = props.value;
  const [users, setUser] = useState({
    Title:"",
    YouTube:"",
    About:''
    });
  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...users,
      [name]: value,
    })
  };
  const handleImage = async(e) =>{
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file)
    setImg(imagePic)
    setImage(e.target.files[0])
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('Title', users.Title)
    formData.append('YouTube', users.YouTube)
    if(content){
      formData.append('About', content)
    }else {
      formData.append('About', users.About)
    }
    
    formData.append('Photo', image)
    formData.append('Type', Type)
    const config = {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
      const res = await axios.post(`${backendUrl}/api/addpost`, formData, config );
      if(res){
        toast.success(res.data.message);
        setUser({
          Title: "",
          YouTube: "",
          About: "",
        });
        setContent("");
        setImage(null);
        setImg(null);
       }
      
  }
  return (
    <>
    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-2 display-5 text-center text-capitalize">{Type}</h2>
          <p className="text-secondary mb-2 text-center ">All India Dusadh Pariwar</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-lg-center">
        <div className="col-12 col-lg-9">
          <div className="bg-white border rounded shadow-sm overflow-hidden">
  
            <form action="#!">
              <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div className="col-12">
                  <label htmlFor="Title" className="form-label">Title <span className="text-danger">*</span></label>
                  <input type="text" 
                  className="form-control"
                  id="Title" 
                  name="Title" 
                  value={users.Title}
                  onChange={handleInput}
                  required/>
                </div>
                {Type === 'events' ? (<div className="col-12">
                  <label htmlFor="YouTube" className="form-label">Youtube Link </label>
                  <input type="text" 
                  className="form-control" 
                  id="YouTube" 
                  name="YouTube" 
                  value={users.YouTube}
                  onChange={handleInput}/>
                </div>):null}
                {Type === 'certificates' ? (<div className="col-12">
                  <label htmlFor="About" className="form-label">Member Email</label>
                  <input type="email" 
                  className="form-control" 
                  id="About" 
                  name="About" 
                  value={users.About}
                  onChange={handleInput}/>
                </div>):null}
                
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Add Photo</label>
             <input className="form-control" 
             type="file" 
             id="formFile" 
             accept=".jpg,.jpeg,.png,.webp"
             value={users.Photo}
             onChange={handleImage}
             />
             
             {(Type === 'events' || Type ===  'pen') && (<div className="col-12">
              <br />
                <label htmlFor="About" className="form-label">Write about it<span className="text-danger">*</span></label>
                <JoditEditor
                className="form-control"
			          ref={editor}
			          value={content}
			          onChange={setContent}/>
              </div>)}
             
               </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg" >Submit</button>
                  </div>
                </div>
              </div>
            </form>
            
  
          </div>
          {img ? (<center><img style={{height:"12vw", width:"25vw", padding:"5px", minHeight:"150px", minWidth:"220px"}} src={img} alt={img} /> </center>):null}
        </div>
      </div>
    </div>
  </section>
  
  </>
  )
}

export default AddPhotos
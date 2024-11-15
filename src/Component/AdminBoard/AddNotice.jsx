import React, { useRef, useState } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { toast } from 'react-toastify';
const AddNotice = (props) => {
  const Type = props.value;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [user, setUser] = useState({
    Title: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Title", user.Title);
    formData.append("About", content);
    formData.append("Type", Type);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${backendUrl}/api/notice`,
      formData,
      config
    );
    if(res){
      toast.success(res.data.message);
      setUser({
        Title: ""
      });
      setContent("");
     }
    
  };
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-2 display-5 text-center text-capitalize">
              {Type}
            </h2>
            <p className="text-secondary mb-2 text-center">
              All India Dusadh Pariwar
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <div>
                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="Title" className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Title"
                      name="Title"
                      value={user.Title}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  {Type !== "notice" ? (
                    <div className="col-12">
                      <label htmlFor="About" className="form-label">
                        Write about it<span className="text-danger">*</span>
                      </label>
                      <JoditEditor
                        className="form-control"
                        ref={editor}
                        value={content}
                        onChange={setContent}
                      />
                    </div>
                  ) : null}

                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        onClick={handleClick}
                        className="btn btn-primary btn-lg"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNotice;

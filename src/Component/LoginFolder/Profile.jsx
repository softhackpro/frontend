import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../stores/Auth";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const { user } = useAuth();
  const [value, setValue] = useState();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleEdit = async (e) => {
    const data = e.target.files[0];
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", data);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      `${backendUrl}/api/updatephoto/${show}`,
      formData,
      config
    );

    navigate("/Members");
  };
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-2 display-5 text-center">
              {user.fullname}&nbsp;Profile
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
                  <center>
                    <img
                      style={{
                        height: "95px",
                        width: "95px",
                        borderRadius: "50%",
                      }}
                      onClick={() => setShow(user._id)}
                      src={`${backendUrl}/${user.profilepicture}`}
                      alt=""
                    />
                  </center>
                  {show === user._id ? (
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                        value={value}
                        onChange={handleEdit}
                      />
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile02"
                      >
                        Upload
                      </label>
                    </div>
                  ) : null}
                  <div className="card text-center">
                    <div className="card-header">ROLE : {user.role}</div>
                    <div className="card-body">
                      <h5 className="card-title">Name: {user.fullname}</h5>
                      <p className="card-text">Email: {user.email}</p>
                    </div>
                  </div>
                  <Link to="/Logout">
                    <button
                      type="button"
                      className="btn text-decoration btn-warning"
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

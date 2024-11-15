import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const ShowStudents = ({ value }) => {
  const [info, setInfo] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [show, setShow] = useState(null);
  const [designation, setDesignaton] = useState();
  const getData = async () => {
    const res = await axios.post(`${backendUrl}/api/getdata`, {
      value,
    });
    setInfo(res.data);
  };
  const handleDelete = async (_id) => {
    const res = await axios.delete(
      `${backendUrl}/api/deleteuser/${_id}`
    );
    setInfo(info.filter((item) => item._id !== _id));
  };
  const handleEdit = async (e) => {
    const load = e.target.value;

    const res = await axios.post(
      `${backendUrl}/api/updateuser/${show}`,
      { load }
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-2 display-5 text-center">{value}</h2>
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
                  <div className="list-group">
                    {info.map((item) => (
                      <div
                        key={item._id}
                        className="list-group-item list-group-item-action list-group-item-primary mt-1 "
                      >
                        <img
                          style={{ height: "35px", width: "35px" }}
                          src={`${backendUrl}/${item.profilepicture}`}
                          alt=""
                        />{" "}
                        <span className="text-secondary">{item.fullname}</span>{" "}
                        <span className="text-primary">{item.email}</span>{" "}
                        <span className="text-primary">{item.phone}</span>{" "}
                        <AiFillDelete
                          onClick={() => handleDelete(item._id)}
                          style={{
                            float: "right",
                            marginTop: "4px",
                            height: "25px",
                            width: "25px",
                            color: "red",
                          }}
                        />{" "}
                        <FaPen
                          style={{
                            float: "right",
                            marginTop: "4px",
                            marginRight: "15px",
                            height: "20px",
                            width: "20px",
                            color: "blue",
                          }}
                          onClick={() => setShow(item._id)}
                        />
                        {show === item._id ? (
                          <select
                            onChange={handleEdit}
                            className="form-select"
                            name="designation"
                            value={designation}
                            aria-label="Default select example"
                          >
                            <option defaultValue={item.role}>{item.role}</option>
                            <option value="Member">Member</option>
                            <option value= "">Admin</option>
                            <option value="Chairman">Chairman</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Volunteer">Volunteer</option>
                          </select>
                        ) : null}
                      </div>
                    ))}
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

export default ShowStudents;

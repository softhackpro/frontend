import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation  } from "react-router-dom";
const EventsGrid = ({ value }) => {
  const location = useLocation();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;  
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const getData = async () => {
    if (value === "user") {
      const res = await axios.post(`${backendUrl}/api/getdata?page=${page}`, { value });
      setInfo(res.data);
    } else {
      const res = await axios.post(
        `${backendUrl}/api/getvalue?page=${page}`,
        { value }
      );
      setInfo(res.data);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if(value === 'user'){
        const response = await axios.post(`${backendUrl}/api/getdata?page=${page}`, {value});
        setInfo(prev => [...prev, ...response.data]);
      }else{
        const response = await axios.post(`${backendUrl}/api/getvalue?page=${page}`, {value});
        setInfo(prev => [...prev, ...response.data]);
      }
        
    };
    fetchData();
}, [page]);
  const handleClick = (e) => {
    if (value === "events") {
      navigate(`/Page/${e}`);
    } else {
      return;
    }
  };
  useEffect(() => {
    getData();
  }, [value]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setPage(1);
    setInfo([]);
}, [location.pathname]);
  return (
    <div className="Containero">
      
      {info.map((item) => (
        <div
        key={item._id}
          style={{ height: "100%" }}
          onClick={() => handleClick(item._id)}
          className="card mb-3"
        >
          <Helmet>
        <title>AIDP : ALL India Dusadh Pariwar Organisation</title>
        <meta name="description" content="All India Dusadh Pariwar : Sankalp hi wikalp hai." />

        {/* Open Graph Tags */}
        <meta property="og:title" content="AIDP : ALL India Dusadh Pariwar Organisation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content={`${frontendUrl}`} />
        <meta property="og:description" content="This is the description of my page." />
        
        {/* Optional: Twitter Card tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIDP : ALL India Dusadh Pariwar Organisation" />
        <meta name="twitter:description" content="AIDP : ALL India Dusadh Pariwar Organisation." />
        <meta name="twitter:image" content="/logo.jpg" />
      </Helmet>
          <img
            style={{ height: "100%", maxHeight: "240px" }}
            src={`${backendUrl}/${item.Photo || item.profilepicture}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-title">{item.Title || item.fullname}</h5> */}
            <p className="card-text">{item.Title || item.fullname}</p>
            <i className="card-text">
              <small className="text-body-secondary">
                Created:{moment(item.createdAt).format("DD MMM YYYY")}
              </small>
            </i>
            <i className="card-text">
              <small className="text-body-secondary">&nbsp;{item.role}</small>
            </i>
            {value === "user" ? (
              <p className="card-text">
                <small className="text-body-secondary">
                  Updated:{moment(item.updatedAt).format("DD MMM YYYY")}
                </small>
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsGrid;

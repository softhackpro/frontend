import React from "react";
import { Link } from "react-router-dom";

const Swiperyside = ({ info }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="kbfvbmvnswipercss">
      {info.map((item) => (
        <Link key={item._id} to={"/Page/" + item._id} className="jshkjsswipehere text-decoration">
          <img
            className="jhghimagetextcss"
            src={`${backendUrl}/${item.Photo}`}
            alt=""
          />
          <h1 className="hghgheadingcss">{item.Title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Swiperyside;

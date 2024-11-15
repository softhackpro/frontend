import React from "react";

const PrincipalPen = ({ info }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="tyytytytyt margintophh">
      <div className="tyytytytyth2">
        <img src={`${backendUrl}/${info.Photo}`} alt="" />

        <h1>{info.Title}</h1> 
        <hr />
        <div dangerouslySetInnerHTML={{ __html: info.About }} />
      </div>
    </div>
  );
};

export default PrincipalPen;

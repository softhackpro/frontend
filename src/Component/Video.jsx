import React from "react";
import ImportantNotice from "./ImportantNotice";
const Video = ({ info }) => {
  return (
    <center>
      <div className="videotagljdfj margintophh">
        <div className="fjdjcenter">
          <video autoPlay muted loop>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="fjdjcenterr hgfpadding">
          <ImportantNotice info={info} />
          </div>
      </div>
    </center>
  );
};

export default Video;

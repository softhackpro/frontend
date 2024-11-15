import React from "react";

const ImportantNotice = ({ info }) => {
  return (
    <div className="jfhnoticecss">
      <div className="jhfjhnoticestatic">Important Notice</div>
      <div className="hggjgnoticescroll">
        <ul className="jdhfjkulcss">
          {info.map((item) => (
            <li key={item._id}>{item.Title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantNotice;

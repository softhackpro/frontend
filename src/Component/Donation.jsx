import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FcDonate } from "react-icons/fc";
import { Link } from "react-router-dom";
const Donation = () => {
  const getAddress = () => {
    window.location.href = "https://maps.app.goo.gl/Y1u6RZ8pcLb8QcYVA";
  };
  return (
    <>
      <center className="buttoncssdonation margintophh">
        <button onClick={getAddress}>
          Address <CiLocationOn />
        </button>
        <Link className="text-decoration" to="/Donation">
          {" "}
          <button>
            Donate <FcDonate />
          </button>{" "}
        </Link>
      </center>
    </>
  );
};

export default Donation;

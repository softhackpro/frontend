import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselHeading from "./CarouselHeading";
import Video from "./Video";
import PrincipalPen from "./PrincipalPen";
import GetContact from "./GetContact";
import Swiperyside from "./Swiperyside";
import Footer from "./Footer";
import Donation from "./Donation";
const StartPage = () => {
  const [value, setValue] = useState([null]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getHome = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/getHome`);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHome();
  }, []);
  return (
    <>
      {value.carousel ? (
        <CarouselHeading info={value.carousel} />
      ) : (
        <p>Loading Carousel</p>
      )}

      <Donation></Donation>
      {value.Notify ? <Video info={value.Notify} /> : <p> Notice Loading </p>}
      {/* <Video info={value.Notify}/> */}
      {value.chairman ? (
        <PrincipalPen info={value.chairman} />
      ) : (
        <p>Pen Loading</p>
      )}

      <GetContact></GetContact>
      {value.Blogs ? <Swiperyside info={value.Blogs} /> : <p>Events Loading</p>}
      {/* <Swiperyside info={value.Blogs}/> */}
      {value.Pages ? <Footer info={value.Pages} /> : <p>Footer Loading</p>}
      {/* <Footer info={value.Pages}/> */}
    </>
  );
};

export default StartPage;

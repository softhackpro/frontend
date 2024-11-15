import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CarouselHeading = ({info}) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="tyytytytyt margintophh">
    <Carousel className="setdivcss" responsive={responsive}>
      {info.map((item)=>(
        <img key={item._id} className="imageset100height object-fit-cover border rounded" src={`${backendUrl}/${item.Photo}`} alt="" />
      ))}
   </Carousel>
  </div>
  )
}

export default CarouselHeading

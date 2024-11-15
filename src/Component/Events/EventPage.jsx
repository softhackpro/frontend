import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Helmet } from 'react-helmet';
const EventPage = () => {
  const [data, setData] = useState([]);
  const check = data.YouTube;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const params = useParams();
  const param = params.id;
  const link = data.YouTube;
  const handleFetch = async () => {
    const res = await axios.post(`${backendUrl}/api/page/${param}`);
    setData(res.data);
  };

  useEffect(() => {
    handleFetch();
  }, [param]);
  return (
    <section className="bg-light py-3 py-md-5">
       <Helmet>
        <title>{`AIDP : ${data.Title}`}</title>
        <meta name="description" content={data.About} />

        <meta property="og:title" content= {`AIDP: ${data.Title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${backendUrl}/${data.Photo}`}/>
        <meta property="og:url" content={`${backendUrl}/Page/${data._id}`} />
        <meta property="og:description" content={data.About} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`AIDP: ${data.Title}`}/>
        <meta name="twitter:description" content= {data.About} />
        <meta name="twitter:image" content={`${backendUrl}/${data.Photo}`} />
      </Helmet>
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <div>
                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                  {!check ? (
                    <img
                      style={{ maxHeight: "270px" }}
                      src={`${backendUrl}/${data.Photo}`}
                      className="card-img-top"
                      alt="..."
                    />
                  ) : (
                    <iframe
                      width="420"
                      height="315"
                      src={`https://www.youtube.com/embed/${data.YouTube}`}
                    ></iframe>
                  )}

                  <h5 className="card-title">{data.Title}</h5>
                  <div dangerouslySetInnerHTML={{ __html: data.About }} />
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Created:{moment(data.createdAt).format("DD MMM YYYY")}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;

import axios from "axios";
import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./stores/Auth";

const DonationForm = () => {
  useEffect(()=>{
    if(!window.Razorpay){
      const script = document.createElement("script");
      script.src= 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }
  },[])
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const key = import.meta.env.VITE_SECRET_KEY;
  const { isLoggedIn } = useAuth();
  const id = new Date();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullname: "",
    amount: 100
  });
  if (!isLoggedIn) {
    return <Navigate to="/Login" />;
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handlePayment = async () => {
    if (window.Razorpay) {
      try {
        const {
          data: { order },
        } = await axios.post(`${backendUrl}/api/payments/create-order`, {
          amount: user.amount,
          user: user.fullname,
          email: user.email,
          Phone: user.phone,
          products: [{ productId: id.toISOString(), quantity: 1, price: user.amount }],
        });
  
        const options = {
          key: key, // From environment variable
          amount: order.amount,
          currency: order.currency,
          name: "All India Dusadh Pariwar NGO",
          description: `You are Donating to All India Dusadh Pariwar NGO in Patna, Bihar`,
          order_id: order.id, // Razorpay Order ID
          handler: async (response) => {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
  
            const verifydonate = await axios.post(
              `${backendUrl}/api/payments/verify-payment`,
              {
                order_id: razorpay_order_id,
                payment_id: razorpay_payment_id,
                razorpay_signature,
              }
            );
  
            if (verifydonate.status === 200) {
              navigate("/");
            }
            console.log("successful", verifydonate.data);
          },
          prefill: {
            name: user.fullname,
            email: user.email,
            contact: user.phone,
          },
          theme: {
            color: "#3399cc",
          },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Payment failed:", error);
      }
    }
  };
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-2 display-5 text-center">Donate</h2>
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
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control" 
                      id="fullname"
                      name="fullname"
                      value={user.fullname}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="amount" className="form-label">
                      Amount<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control" // className
                      id="amount"
                      name="amount"
                      value={user.amount}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>{" "}
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInput}
                        minLength={10}
                        maxLength={10}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        onClick={handlePayment}
                        className="btn btn-primary btn-lg"
                      >
                        Donate
                      </button>
                    </div>
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

export default DonationForm;

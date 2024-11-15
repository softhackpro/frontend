import React from 'react'
import { FaSquareInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { TbChartCircles } from "react-icons/tb";
const AddSocialMedia = () => {
  return (
    <section className="bg-light py-3 py-md-5">

  <div className="container">
    <div className="row justify-content-lg-center">
      <div className="col-12 col-lg-9">
        <div className="bg-white border rounded shadow-sm overflow-hidden">

          <form action="#!">
            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
              <div className="col-12 col-md-6">
                <label htmlFor="instagram" className="form-label">Instagram <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">
                  <FaSquareInstagram />
                  </span>
                  <input type="text" className="form-control" id="email" name="instagram" value=""/>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="facebook" className="form-label">Facebook <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">
                  <FaFacebook />
                  </span>
                  <input type="text" className="form-control" id="email" name="facebook" value="" required/>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="youtube" className="form-label">YouTube <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">
                  <FaYoutube />
                  </span>
                  <input type="text" className="form-control" id="email" name="youtube" value="" required/>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="x" className="form-label">X <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">
                  <FaXTwitter />
                  </span>
                  <input type="text" className="form-control" id="email" name="x" value="" required/>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="flyube" className="form-label">Flyube</label>
                <div className="input-group">
                  <span className="input-group-text">
                  <TbChartCircles />
                  </span>
                  <input type="text" className="form-control" id="phone" name="flyube" value=""/>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">Update</button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default AddSocialMedia
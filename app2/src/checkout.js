import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

export default class Chackout extends Component {
  render() {
    return (<>
      <Navbar />
      <div className="py-3 text-center">
        <h1 className="page-heading">✨Checkout✨</h1>
        <div className="container py-5">
          <form>
            <div className="row g-5 justify-content-center">
              <div
                className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">First Name</label>
                      <input type="text" className="form-control" required="" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" required="" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number Street Name"
                    required=""
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Postcode</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <input type="tel" className="form-control" required="" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" className="form-control" required="" />
                </div>
                <div className="form-item py-5" align="center">
                  <button className="btn btn-primary"> Submit</button>
                </div>
                <hr />
              </div>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>)
  }
}
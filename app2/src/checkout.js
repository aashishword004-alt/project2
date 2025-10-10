import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";


export default class Chackout extends Component {
  render() {
    return (<>
      <Navbar />
          <div className="container">
            <div className="row my-5">
              <div className="col-lg-8 offset-2">
                <div className="card shadow">
                  <div className="card-header ">
                    <h3 className="text-white">Checkout</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row g-3">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            aria-label="Full name"
                            required
                            id="fullname"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Mobile"
                            aria-label="Mobile"
                            required
                            id="mobile"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address Line 1"
                            required
                            id="address1"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address Line 2"
                            required
                            id="address2"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            required
                            id="city"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pin Code"
                            required
                            id="pincode"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Remarks"
                            required
                            id="remarks"
                          />
                        </div>

                        <div className="col-12">
                          <span className="fw-bold">Select payment type</span>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioDefault"
                              id="formRadioDefault"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formRadioDefault"
                            >
                              Cash on Delivery
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioDefault"
                              id="formRadioChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formRadioChecked"
                            >
                              Online money transfer
                            </label>
                          </div>
                        </div>

                        <div className="col-12 text-end py-3">
                          <button
                             type="raset"
                            className="btn btn-outline-primary"
                          >
                            Cancel
                          </button>
                          <button className="btn btn-primary" type="submit">
                            Place Order
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <Footer />
    </>)
  }
}
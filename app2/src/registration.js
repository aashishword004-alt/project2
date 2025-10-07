import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Registration extends Component {
    render() {
        return (<>
            <Navbar />
            <div className="py-3 text-center">
                <h1 className="page-heading">✨Registration✨</h1>
            </div>
            {/* Main Content */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="text-center mb-4 text-primary">User Registration</h3>
                                <form id="registrationForm">
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile Number</label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            className="form-control"
                                            pattern="[0-9]{10}"
                                            placeholder="10-digit number"
                                            required=""
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary px-5">
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <div id="result" className="mt-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>)
    }
}
export default Registration;
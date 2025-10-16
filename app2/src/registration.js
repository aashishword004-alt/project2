import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { getBaseUrl } from "./basurl";
import axios from "axios";
import { Showerror, Showmessage } from "./message";
import WithHook from "./hoc";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            conformpassword: "",
            mobile: ""
        };
    }

    // ✅ Corrected function name usage
    upadtevalue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    ragister = (e) => {
        e.preventDefault();
        let apiaddres = getBaseUrl() + "register.php";

        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("mobile", this.state.mobile);

        axios({
            url: apiaddres,
            method: "post",
            data: form, // ✅ Added missing form data
            responseType: "json"
        })
            .then((response) => {
                console.log(response.data);
                let error = response.data[0]["error"];
                if (error !== "no") {
                    Showerror("Please Fill All The Details");
                } else {
                    let success = response.data[1]["success"];
                    let message = response.data[2]["message"];

                    if (success === "yes") {
                        Showmessage("Registraion Succesfully ✅")

                        setTimeout(() => {
                            this.props.navigate("/login");

                        }, 2000);
                    } else {
                        Showerror(message);
                    }
                }
            })
            .catch((error) => {
                if (error.code === "ERR_NETWORK") {
                    Showerror("You are Offline or Server is Busy");
                }
            });
    };

    render() {
        return (
            <> 
                <div className="py-3 text-center">
                    <h1 className="page-heading">✨ Registration ✨</h1>
                </div>

                <ToastContainer />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg border-0 rounded-4">
                                <div className="card-body p-4">
                                    <h3 className="text-center mb-4 text-primary">
                                        User Registration
                                    </h3>

                                    <form id="registrationForm" onSubmit={this.ragister}>
                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.upadtevalue}
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={this.state.password}
                                                onChange={this.upadtevalue}
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <input
                                                type="password"
                                                id="conformpassword"
                                                value={this.state.conformpassword}
                                                onChange={this.upadtevalue}
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Mobile Number</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                value={this.state.mobile}
                                                onChange={this.upadtevalue}
                                                className="form-control"
                                                pattern="[0-9]{10}"
                                                placeholder="10-digit number"
                                                required
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-primary px-5">
                                                Register
                                            </button>
                                        </div>
                                        <div className="text-center">
                                            <Link to={"/login"} >Alredy Have Account</Link>
                                        </div>

                                    </form>

                                    <div id="result" className="mt-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default WithHook(Registration);

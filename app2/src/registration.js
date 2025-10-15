import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { getBaseUrl } from "./basurl";
import axios from "axios";
import { Showerror } from "./message";
import WithHook from "./hoc";
import { ToastContainer } from "react-toastify";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            conformpassword: "",
            mobile: ""
        }
    }

    upadtevalue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    Ragister = (e) => {
        e.preventDefault()
        let apiaddres = getBaseUrl() + "register.php";

        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password",this.state.password);
        form.append("mobile",this.state.mobile);

        axios({
            url: apiaddres,
            method: "post",
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if(error != "no")
            {
                Showerror("Please Fullfill The Details");
            }
            else{
                let success = response.data[1]["success"];
                let message = response.data[2]["message"];

                if(success === "yes")
                {
                    this.props.navigate("/login")

                }
                else{

                }
            }

        }).catch((error) => {
            if(error.code === "ERR_NETWORK")
            {
                Showerror("You are Offline Either Sever Busy");
            }

        })
    }

    render() {
        return (<>
            <Navbar />
            <div className="py-3 text-center">
                <h1 className="page-heading">✨Registration✨</h1>
            </div>
            {/* Main Content */}
            <ToastContainer/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="text-center mb-4 text-primary">User Registration</h3>
                                <form id="registrationForm" onSubmit={this.Ragister}>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.state.upadtevalue}

                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.state.upadtevalue}

                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={this.state.conformpassword}
                                            onChange={this.state.upadtevalue}

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
                                            onChange={this.state.upadtevalue}

                                            value={this.state.mobile}
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
export default  WithHook (Registration);
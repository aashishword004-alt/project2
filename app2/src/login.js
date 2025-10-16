import { Component } from "react";
import { getBaseUrl } from "./basurl";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Showerror, Showmessage } from "./message";
import WithHook from "./hoc";
import { withCookies } from "react-cookie";
import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    updateValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault(); // prevent page reload
        let apiaddres = getBaseUrl() + "login.php";

        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);




        axios({
            url: apiaddres,
            method: "post",
            data: form,
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if (error !== "no") {
                Showerror(error)
            }
            else {
                let success = response.data[1]["success"];
                let message = response.data[2]["message"];

                if (success === "yes") {
                    // crate a Cookies variable 
                this.props.setCookie("id",response.data[3]['id'])

                 Showmessage("login Succesfully ✅");
                    setTimeout(() => {
                        this.props.navigate("/");

                    }, 2000);

                }
                else {
                    Showerror(message);
                }
            }



        }).catch((error) => {
            if (error.code === "ERR_NETWORK") {
                Showerror("You are Offline Either Sever Busy");
            }

        })
    }
    render() {
        return (<>
            <div className=" py-3">
                <h1 className="page-heading">✨Login✨</h1>
            </div>
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card shadow mb-4 ">
                            <div className="card-body ">
                                <form action="" onSubmit={this.login} method="post">
                                    <div className="mb-3 ">
                                        <label htmlFor="" className="form-label">
                                            Enter The Email
                                        </label>
                                        <input
                                            type="Email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.updateValue}
                                            id="email"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Enater Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.updateValue}
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div align="center">
                                        <button type="submit" className="btn btn-primary">
                                            Sign in
                                        </button>
                                        <button type="reset" className="btn btn-danger">
                                            Clear
                                        </button>
                                    </div>
                                    <div className="col-4" align="center" className="mt-3">
                                        <Link to={""}>Forgot Password</Link>
                                    </div>
                                    <div align="center" className="Col-4">
                                        <Link to={"/registration"}>NO Account </Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default WithHook(Login);
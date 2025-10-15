import { Component } from "react";
import { getBaseUrl } from "./basurl";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Showerror } from "./message";
import WithHook from "./hoc";

class Login extends Component {

    login = (e) => {
        let apiaddres = getBaseUrl() + "login.php";
        axios({
            url: apiaddres,
            method: "post",
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if(error !== "no")
            {
                Showerror(error)
            }
            else{
                let success = response.data[1]["success"];
                let message = response.data[2]["message"];

                if( success === "yes")
                    {
                    //  setTimeout({
                    //     this.props.navigate("/")
                    //  },2000)
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
            <ToastContainer/>
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
                                            name=""
                                            id=""
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
                                    <div align="center" className="mt-3">
                                        <a href="">Forgot Password</a>
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

export default  WithHook(Login);
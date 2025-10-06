import { Component } from "react";

class Login extends Component {
    render() {
        return (<>
            <div className=" py-3">
                <h1 className="page-heading">✨Login✨</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card shadow mb-4 ">
                            <div className="card-body ">
                                <form action="" encType="multipart/form-data" method="post">
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

export default Login;
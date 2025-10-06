import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class ChangePassword extends Component {
    render() {
        return (<>
            <Navbar />
            <div className=" py-3">
                <h1 className="page-heading">✨Change Password✨</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <form action="" encType="multipart/form-data" method="post">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Current password
                                        </label>
                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            New password
                                        </label>
                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Confirm new password
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
                                            {" "}
                                            Save Change
                                        </button>
                                        <button type="reset" className="btn btn-danger">
                                            Clear
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        );
    }
}
export default ChangePassword;
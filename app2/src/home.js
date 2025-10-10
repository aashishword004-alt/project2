import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { getBaseUrl, getImageUrl } from "./basurl";
import { Showerror, Showmessage } from "./message";
import { ToastContainer } from "react-toastify";

class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: [],

        }
    }

    
    componentDidMount() {


     

        // this is Category
        axios({
            url:  getBaseUrl() + "category.php",
            method: "get",
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if (error !== "no") {
                alert(error);
            }
            else {
                let total = response.data[1]["total"];
                if (total === 0) {
                    alert("Category not found");
                }
                else {
                    response.data.splice(0, 2);
                    Showmessage("Welcome")
                    this.setState({
                        categories: response.data
                    })
                    console.log(response.data);
                    // console.log(response.data);
                }
            }

        }).catch((error) => {
            if(error.code == "ERR_NETWORK")
            {
                Showerror("You Are offline Either Server Busy");
            }

        })
    }
    render() {
        return (
            <>


                <Navbar />
                <ToastContainer/>

                <div className="py-3 text-center">
                    <h1 className="page-heading">✨HOME✨</h1>
                </div>

                <div className="container-fluid px-0">
                    <div className="row g-0">
                        <div
                            className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="p-4">
                                <div className="d-inline-flex align-items-center">
                                    <i className="fa fa-sync-alt fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Free Return</h6>
                                        <p className="mb-0">30 days money back guarantee!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="p-4">
                                <div className="d-flex align-items-center">
                                    <i className="fab fa-telegram-plane fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Free Shipping</h6>
                                        <p className="mb-0">Free shipping on all order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="p-4">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-life-ring fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Support 24/7</h6>
                                        <p className="mb-0">We support online 24 hrs a day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="p-4">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-credit-card fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
                                        <p className="mb-0">Recieve gift all over oder $50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="p-4">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-lock fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Secure Payment</h6>
                                        <p className="mb-0">We Value Your Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <div className="p-4">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-blog fa-2x text-primary" />
                                    <div className="ms-4">
                                        <h6 className="text-uppercase mb-2">Online Service</h6>
                                        <p className="mb-0">Free return products in 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Categories */}
                <div className="py-3 text-center">
                    <h1 className="page-heading">✨CATEGORIES✨</h1>
                </div>

                <div className="container mt-4">
                    <Link to={""}>
                    <div className="row g-4">
                        {this.state.categories.map((item) => (
                            <div key={item.id} className="col-4 col-sm-6 col-md-4 col-lg-3">
                                <div className="card shadow border-0 h-100">
                                    <img
                                        src={ getImageUrl() + "category/" + item.photo}
                                        className="card-img-top img-fluid"
                                        alt={item.title}
                                    />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </Link>
                </div>


                {/* Products */}


                <Footer />

            </>
        );
    }
}

export default Home;

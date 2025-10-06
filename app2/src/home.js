import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Home extends Component {
    render() {
        return (
            <>


                <Navbar/>

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
                <div className="container my-4">
                    <div className="row py-5">
                        <div className="col-12 h2 text-center fw-bold text-primary">
                            Categories
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card shadow border-0 h-100">
                                <img
                                    src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                    className="card-img-top img-fluid"
                                    alt="Category"
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title">
                                        <i className="bi bi-tag" /> Category Name
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="row py-5">
                        <div className="col-12 h2 text-center fw-bold text-primary">
                            Products
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card shadow border-0 h-100">
                                <img
                                    src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                    className="card-img-top img-fluid"
                                    alt="Product"
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title">
                                        <i className="bi bi-tag" /> Product Name
                                    </h4>
                                    <p className="card-text">Price: ₹7500</p>
                                    <button className="btn btn-primary w-100">Add to Cart</button>
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

export default Home;

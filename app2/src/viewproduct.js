import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class ViewProduct extends Component {
    render() {
        return (<>
            <Navbar />
            <div className="py-3 text-center">
                <h1 className="page-heading">✨Product View✨</h1>
            </div>
            {/* Main Content */}
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-7 col-xl-9 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4 single-product">
                            <div className="col-xl-6">
                                <div className="single-carousel owl-carousel">
                                    <div className="single-item">
                                        <div className="single-inner bg-light rounded">
                                            <img
                                                src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                                className="img-fluid rounded"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <h4 className="fw-bold mb-3">Smart Camera</h4>
                                <p className="mb-3">Category: Electronics</p>
                                <h5 className="fw-bold mb-3">3,35 $</h5>
                                <div className="mb-3"></div>
                                <div className="d-flex flex-column mb-3">
                                    <small>Product SKU: N/A</small>
                                    <small>
                                        Available:{" "}
                                        <strong className="text-primary">20 items in stock</strong>
                                    </small>
                                </div>
                                <p className="mb-4">
                                    The generated Lorem Ipsum is therefore always free from repetition
                                    injected humour, or non-characteristic words etc.
                                </p>
                                <p className="mb-4">
                                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
                                    flounder; chain pickerel hatchetfish, pencilfish snailfish
                                </p>
                                <div
                                    className="input-group quantity mb-5"
                                    style={{ width: 100 }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>)
    }
}
export default ViewProduct;
import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
class Home extends Component {
    render() {
        return (<>
       <Navbar/>
            {/* Main Content */}
            <div className="py-3 text-center">
                <h1 className="page-heading">✨HOME✨</h1>
            </div>
            <div className="container my-4">
                <div className="row py-5">
                    <div className="col-12 h2 text-center fw-bold text-primary">
                        Categorie
                    </div>
                </div>
                {/* Responsive Category Card */}
                <div className="row g-4 ">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card shadow border-0 category-card h-100">
                            <img
                                src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                className="card-img-top img-fluid"
                                alt="Category"
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title">
                                    <i className="bi bi-tag" /> Name Categorie
                                </h4>
                                <p className="card-text">Price: ₹7500</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products */}
                <div className="row py-5">
                    <div className="col-12 h2 text-center fw-bold text-primary">Products</div>
                </div>
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card shadow border-0 category-card h-100">
                            <img
                                src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                className="card-img-top img-fluid"
                                alt="Product"
                            />
                            <div className="card-body text-center">
                                <a href="#">
                                    <h4 className="card-title">
                                        <i className="bi bi-tag" /> Name Product
                                    </h4>
                                </a>
                                <p className="card-text">Price: ₹7500</p>
                                <div>
                                    <button className="btn btn-primary w-100">Add Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
              <Footer/>
            </div>
        </>
        )
    }
}
export default Home;
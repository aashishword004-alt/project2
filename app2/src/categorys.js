import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class Category extends Component {
    render() {
        return (
            <>
            <Navbar/>
                <div className="col-12 py-3">
                    <h1 className="page-heading">✨ Categories ✨</h1>
                </div>
                <div className="container my-4">
                    <div className="row g-4">
                        {/* Category Card 1 */}
                        <div className="col-md-3">
                            <div className="card shadow border-0 category-card">
                                <img
                                    src="theme/img/Login Page 3D Icon - Free Download People 3D Icons _ IconScout.jpeg"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <i className="bi bi-tag" />
                                        Name Categorie{" "}
                                    </h4>
                                    <p className="card-text">Price: ₹7500</p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>

        )
    }
}
export default Category;
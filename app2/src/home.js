import { Component } from "react";
class Home extends Component {
    render() {
        return (<>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-cart4" /> Shop
                    </a>
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="home.html">
                                    <i className="bi bi-house-fill" /> HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">
                                    <i className="bi bi-bag" /> Categories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="products.html">
                                    <i className="bi bi-box-seam-fill" /> Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_orders.html">
                                    <i className="bi bi-cart-check-fill" /> Cart
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="chekeout.html">
                                    <i className="bi bi-bag-check" /> Checkout
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_change_password.html">
                                    <i className="bi bi-key" /> Change Password
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Login.html">
                                    <i className="bi bi-box-arrow-in-right" /> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
                <div className="row g-4 justify-content-center">
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
                <div className="row g-4 justify-content-center">
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
                <footer className="footer bg-light py-3 mt-5 border-top">
                    <div className="container text-center">
                        <p className="mb-0">© MY Shop | Ashish Parmar</p>
                    </div>
                </footer>
            </div>
        </>
        )
    }
}
export default Home;
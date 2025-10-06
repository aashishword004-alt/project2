import { Component } from "react";

class Navbar extends Component{
    render()
    {
        return(   <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-cart4" /> Online Shop
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
            </nav>);
    }
}
export default Navbar;
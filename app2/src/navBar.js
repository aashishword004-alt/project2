import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render()
    {
        return(   <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-5">
                <div className="container-fluid">
                    <div className=" fw-bold h4">
                        <i className="bi bi-cart4" /> Online Shop
                    </div>
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
                                <Link className="nav-link active" to="/">
                                    <i className="bi bi-house-fill" /> HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorys">
                                    <i className="bi bi-bag" /> Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    <i className="bi bi-box-seam-fill" /> Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <i className="bi bi-cart-check-fill" /> Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checkout">
                                    <i className="bi bi-bag-check" /> Checkout
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/changepassword">
                                    <i className="bi bi-key" /> Change Password
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">
                                    <i class="bi bi-person-fill-check"></i> Registration
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <i className="bi bi-box-arrow-in-right" /> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
    }
}
export default Navbar;
import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import WithHook from "./hoc";

import { getBaseUrl, getImageUrl } from "./basurl";

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        let { categoryid } = this.props.params;
        let apiaddres = getBaseUrl() + "product.php?categoryid=" + categoryid;;
        axios({
            url: apiaddres,
            method: "get",
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if (error !== "no") {
                alert(error)
            }
            else {
                let total = response.data[1][2];
                if (total === 0) {
                    alert("Product not found ");
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        product: response.data
                    })
                    console.log(response.data);
                }
            }
        }).catch((error) => {


        })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className=" py-3">
                    <h1 className="page-heading">✨Products✨</h1>
                </div>
                <div className="container my-4">
                    <div className="row g-4">
                        <div className="row"></div>
                        {/* Category Card 1 */}
                        <div className="row g-4">
                            {this.state.product.map((item) => (
                                <div className="col-md-3">
                                    <div className="card shadow border-0 category-card">
                                        <img src={getImageUrl() + "product/" + item.photo} className="card-img-top" />
                                        <div className="card-body">
                                            <Link to="/viewproduct">
                                                <h4 className="card-title">
                                                    <i className="bi bi-tag" />
                                                    {item.title}
                                                </h4>
                                            </Link>
                                            <h6>
                                                {item.categorytitle}
                                            </h6>
                                            <p className="card-text">Price: ₹{item.price}</p>
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
                <Footer />
            </>

        )
    }
}
export default WithHook(Products);
import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { getBaseUrl, getImageUrl } from "./basurl";
import WithHook from "./hoc";
import axios from "axios";
import { Showerror, Showmessage } from "./message";
import { ToastContainer } from "react-toastify";

class ViewProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }


    componentDidMount() {
        let { productid } = this.props.params;
        let apiaddres = getBaseUrl() + "product.php?productid=" + productid;
        axios({
            url: apiaddres,
            method: "get",
            responseType: "json"
        }).then((response) => {
            // console.log(response.data)
            let error = response.data[0]['error'];
            if (error !== "no") {
                Showerror(error);
            }
            else {
                let total = response.data[1]["total"];
                if (total === 0) {
                    Showmessage("Product not Found")
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        product: response.data
                    })
                }
            }

        }).catch((error) => {
            if (error.code === "ERR_NETWORK")


                Showerror("You are Offline Either Server Busy");

        })
    }

    display = (item) => {
        return (
            <div className="col-lg-7 col-xl-9 wow fadeInUp" data-wow-delay="0.1s">
                <ToastContainer/>
                <div className="row g-4 single-product">
                    <div className="col-xl-6">
                        <div className="single-carousel owl-carousel">
                            <div className="single-item">
                                <div className="single-inner bg-light rounded">
                                    <img
                                        src={getImageUrl() + "product/" + item.photo}
                                        className="img-fluid rounded"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <h4 className="fw-bold mb-3">{item.title}</h4>
                        <h5 className="fw-bold mb-3">{item.price} $</h5>
                        <div className="mb-3"></div>
                        <div className="d-flex flex-column mb-3">
                            <small>Stock: {item.stock}</small>
                            <small>Weight: {item.weight}</small>
                            <small>Size: {item.size}</small>
                        </div>
                        <p className="mb-4">{item.detail}</p>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (<>
            <Navbar />
            <div className="py-3 text-center">
                <h1 className="page-heading">✨Product View✨</h1>
            </div>
            {/* Main Content */}
            <div className="container py-5">
                <div className="row g-4">
                    {this.state.product.map((item) => this.display(item))}

                </div>
            </div>
            <Footer />

        </>)
    }
}
export default WithHook(ViewProduct);
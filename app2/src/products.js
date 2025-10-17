import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import WithHook from "./hoc";

import { getBaseUrl, getImageUrl } from "./basurl";
import { Showerror, Showmessage } from "./message";

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    addcart = (productid) =>{
        let userid = this.props.cookies["id"];
        let apiaddress = getBaseUrl() + "add_to_cart.php?productid=" +  productid + "&userid" + userid;
        console.log(apiaddress)
        axios({
            method:"post",
            responseType:'json',
            url:apiaddress
        }).then((response) =>{
            let error = response.data[0]['error'];
            if( error !== 'no')
            {
                Showerror(error)
            }
            else{
                      let message = response.data[1]['message'];
                      if(message == "yes" )
                      {
                        Showmessage("Add Cart Succefully");
                    
                      }
            }
        }).catch((error) =>{
            if(error.code === 'ERR_NETWORK')
            {
                Showerror("Your Network is Either Server Busy");
            }
        })
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
        if(error.code === 'ERR_NETWORK'){
            Showerror("Network is down Either Sever Busy");
        }

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
                                            <Link to={"/viewproduct/id/" + item.id} >
                                                <h4 className="card-title">
                                                    <i className="bi bi-tag" />
                                                    {item.title}
                                                </h4>
                                            </Link>
                                            <h6>
                                                {item.categorytitle}
                                            </h6>
                                            <p className="card-text">Price: ₹{item.price}</p>
                                            <button onClick={() =>this.addcart(item.id)} className="btn btn-primary">Add Cart</button>
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
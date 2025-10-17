import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import WithHook from "./hoc";
import { getBaseUrl } from "./basurl";
import axios from "axios";
 class Cart extends Component{

    componentDidMount(){
        let id = this.props.cookies['id'];
        let apiadress = getBaseUrl() + "cart.php?userid=" + id;
        axios({
            responseType:'json',
            method:"get",
            url:apiadress
        })

    }

    render()
    {
        return(<>
        <Navbar/>
           <div className="py-3 text-center">
                <h1 className="page-heading">✨Cart✨</h1>
            </div>

         <div class="container py-5">
        <div class="row">
            <div class="col-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p class="mb-0 py-4">Apple iPad Mini</p>
                            </th>

                            <td>
                                <p class="mb-0 py-4">2.99 $</p>
                            </td>
                            <td>
                                <div class="input-group quantity py-4">
                                    <p>1</p>
                                </div>
                            </td>
                            <td>
                                <p class="mb-0 py-4">2.99 $</p>
                            </td>
                            <td class="py-4">
                                <button class="btn btn-md rounded-circle bg-light border">
                                    <i class="fa fa-times text-danger"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-4">
                <div class="cart-summary rounded">
                    <div class="p-4">
                        <h1 class="display-6 mb-4">Cart <span class="fw-normal">Total</span></h1>
                        <div class="d-flex justify-content-between mb-4">
                            <h5 class="mb-0 me-4">Subtotal:</h5>
                            <p class="mb-0">$96.00</p>
                        </div>
                    </div>
                    <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                        <h5 class="mb-0 ps-4 me-4">Total</h5>
                        <p class="mb-0 pe-4">$99.00</p>
                    </div>
                    <div align="center">
                        <a href="">
                        <button className="btb btn-primary my-3"> 
                            Checkout
                        </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>


    </div>
    <Footer/>

        </>)
    }
}
export default WithHook(Cart);
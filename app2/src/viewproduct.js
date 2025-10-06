import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

class ViewProduct extends Component{
    render()
    {
        return(<>
        <Navbar/>
          <div className="py-3 text-center">
                <h1 className="page-heading">✨Product View✨</h1>
            </div>
        {/* Main Content */}
        <Footer/>

        </>)
    }
}
export default ViewProduct;
import { Component } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import axios from "axios";
import { getBaseUrl, getImageUrl } from "./basurl";

class Category extends Component {
     constructor(props) {
        super(props);
        this.state = {
            categories: []

        }
    }


     componentDidMount() {
        let apiAdrres =  getBaseUrl() + "category.php";
        axios({
            url: apiAdrres,
            method: "get",
            responseType: "json"
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]["error"];
            if (error !== "no") {
                alert(error);
            }
            else {
                let total = response.data[1]["total"];
                if (total === 0) {
                    alert("Category not found");
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        categories: response.data
                    })
                    console.log(response.data);
                    // console.log(response.data);
                }
            }

        }).catch(() => {

        })
    }
    render() {
        return (
            <>
            <Navbar/>
                <div className="col-12 py-3">
                    <h1 className="page-heading">✨ Categories ✨</h1>
                </div>
                  <div className="container mt-4">
                    <div className="row g-4">
                        {this.state.categories.map((item) => (
                            <div key={item.id} className="col-4 col-sm-6 col-md-4 col-lg-3">
                                <div className="card shadow border-0 h-100">
                                    <img
                                        src={ getImageUrl ()+ "category/" + item.photo}
                                        className="card-img-top img-fluid"
                                        alt={item.title}
                                    />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </>

        )
    }
}
export default Category;
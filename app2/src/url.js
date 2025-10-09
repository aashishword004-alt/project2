import { Component } from "react";

export class Bas extends Component{
    render()
    {
        return "https://theeasylearnacademy.com/shop/";
    }

}

export class Baseurl extends Component {
    render()
    {
        return Bas() + "ws/";
    }
}

export class Basimage extends Component{
    render()
    {
        return Bas() + "images/";
    }
}
import React, { Component } from 'react';
import "./checkout.css";

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
            email: ""
        }
    }

     handleNameChange = (e) =>{
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange =(e) =>
    {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }



    render() {
        return (
            <div className = {this.props.hidden? "checkout-form hidden" : "checkout-form"}>
                <h2>Checkout</h2>
                <input type = "text" onChange = {this.handleNameChange} placeholder = "Name" value = {this.state.name}/>
                <input type = "email" onChange = {this.handleEmailChange} placeholder = "Email" value = {this.state.email} />
                <input className = "btn-proceed" type = "submit" value = "Proceed"/>
            </div>
        )
    }
}

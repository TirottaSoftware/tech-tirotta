import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkout from "./checkout.js";
import './cart.css'

export default class Cart extends Component {
    constructor(props){
    super(props);
    this.state = {
        checkoutHidden: true,
        errorMessage: ""
    }
}

    showCheckoutForm =(e) =>{
        e.preventDefault();
       
        if(this.props.cart.length === 0){
            this.setState({
                errorMessage: "You have to add at least one item in order to checkout"
            })
            return;
        }
        this.setState({
            checkoutHidden: false
        })
    }

    render() {
        return (
            <div className = "cart-container">
                <h3>{this.props.cart.length === 0 ? "cart is empty..." : this.props.cart.length + " items in the cart"}</h3>
                {this.props.cart.map(product => 
                (<div className = "cart-item"> 
                    <img src = {product.image} />
                    <div className = "item-description">
                        <h5>{product.title}</h5>
                        <div className = "item-purchase"> 
                            <p>${product.price}</p>
                            <button onClick = {() => this.props.removeItem(product)}><DeleteIcon /></button>
                        </div>
                    </div>
                </div>)
                )}
                <p>{this.props.cart.length === 0 ? this.state.errorMessage  : null}</p>
                <div className = "cart-price">
                    <button onClick = {this.showCheckoutForm}>Checkout</button>
                <h4>Total: ${this.props.totalPrice}</h4>
                </div>
                <Checkout hidden = {this.state.checkoutHidden} />
            </div>
        )
    }
}
 
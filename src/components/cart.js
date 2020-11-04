import React, { Component } from 'react'
import './cart.css'

export default class Cart extends Component {
    constructor(props){
    super(props);
    this.state = {
    }
}

    getTotalPrice = () =>{
        
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
                            <p>{product.price}</p>
                            <button onClick = {() => this.props.removeItem(product)}>R</button>
                        </div>
                    </div>
                </div>)
                )}
                <div className = "cart-price">
                <h4>Total Price: {this.getTotalPrice}</h4>
                </div>
            </div>
        )
    }
}

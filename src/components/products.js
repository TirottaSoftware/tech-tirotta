import React, { Component } from 'react'
import './products.css';

export default class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }
    render() {
        return (
            <div className = "products">
                {this.props.products.map((product) =>
                <div key = {product.id} className = "product">
                    <img src = {product.image} alt = ""/>
                    <h3 id = "product-title">{product.title}</h3>
                    <p>{product.description}</p>
                    <button onClick = {() => this.props.addToCart(product)}>${product.price}</button>
                </div>
                )}
            </div>
        )
    }
}

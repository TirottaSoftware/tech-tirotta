import React, { Component } from 'react'
import data from '../products.json';
import './products.css';

export default class products extends Component {
    constructor(){
        super();
        this.state = {
            filter: "",
            products: data.products,
        }
    }
    render() {
        return (
            <div className = "products">
                {this.state.products.map((product) =>
                <div key = {product.id} className = "product">
                    <img src = {product.image} alt = ""/>
                    <h3 id = "product-title">{product.title}</h3>
                    <p>{product.description}</p>
                    <button>${product.price}</button>
                </div>
                )}
            </div>
        )
    }
}

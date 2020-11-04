import React, { Component } from 'react'
import './filter.css';

export default class Filter extends Component {
        constructor(){
            super();
            this.state = {
            }
        }

    render() {
        return (
            <div className = "filter-container">
                <p>Products found: {this.props.count}</p>
                <div className = "sort">
                <h4>sort by:</h4>
                    <select value = {this.props.price} onChange = {this.props.sortPrice()}>
                        <option></option>
                        <option>Price (low to high)</option>
                        <option>Price (high to low)</option> 
                    </select>
                </div>
                <div className = "type">
                    <h4>type: </h4>
                        <select value = {this.props.type} onChange = {this.props.filterType()}>
                        <option>All</option>
                            <option>Laptop</option>
                            <option>Smartphone</option>
                        </select>
                </div>
            </div>
        )
    }
}

import React, { Component } from "react";
import Modal from "react-modal";
import "./products.css";

export default class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      modalProduct: null,
      modalOpen: false,
    };
  }

  showModal = (product) => {
    this.setState({
      modalProduct: product,
      modalOpen: true,
    });
  };

  modalAdd = (modalProduct) => {
    this.props.addToCart(modalProduct);
    this.closeModal();
  };

  closeModal = () => {
    this.setState({
      modalProduct: null,
      modalOpen: false,
    });
  };

  render() {
    return (
      <div className="products">
        {this.props.products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              onClick={() => this.showModal(product)}
              alt=""
            />
            <h3 id="product-title">{product.title}</h3>
            <button
              className="btn-add"
              onClick={() => this.props.addToCart(product)}
            >
              {product.price}{" "}
            </button>
          </div>
        ))}
        <Modal
          className="modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
        >
          {this.state.modalProduct && (
            <div className="modal-container">
              <img src={this.state.modalProduct.image} />
              <div className="product-specs">
                <h1>{this.state.modalProduct.title}</h1>
                <p>{this.state.modalProduct.description}</p>
                <button
                  className="btn-add"
                  onClick={() => this.modalAdd(this.state.modalProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

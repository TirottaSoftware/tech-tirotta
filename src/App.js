import './App.css';
import React, {useState, useEffect} from 'react';
import data from './products.json';
import Navbar from './components/navbar.js';
import Products from './components/products.js';
import Cart from './components/cart';
import Filter from './components/filter';

function App() {
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [products, setProducts] = useState(data.products);
  const [cart, setCart] = useState([]);

  const sortPrice = (event) =>{
    setPrice(event.target.value);
    setProducts( 
      products.sort((a,b) => 
      event.target.value === "Price (low to high)" ?
      a.price > b.price ? 1 : -1
      : event.target.value === "Price (high to low)" ?
      a.price < b.price ? 1: -1
      : a.id >b.id
      )
    )
  }

  const filterType = (event) =>{
    setType(event.target.value);
    if(event.target.value === "All"){
      setProducts(data.products)
    }
    else{
      setProducts(data.products.filter(p => p.type === event.target.value))
    }
  }

  const addToCart = (product) =>{
    let cartRef = [...cart];
    cartRef.push(product);
   setCart(cartRef);
  }

  const removeItem = (product) =>{
    let cartRef = [...cart];
    let index = cartRef.indexOf(product);
    cartRef.splice(index, 1);
    setCart(cartRef);
  }
  
  return (
    <div className="App">
      <Navbar />
      <Filter
        count = {products.length}
        price = {price}
        type = {type}
        sortPrice = {() =>sortPrice}
        filterType = {() =>filterType}
      />
        <div className = "main-container">
            <Products products = {products} 
            addToCart = {addToCart}/>
            <Cart 
            cart = {cart}
            removeItem = {removeItem}
            />
        </div>   
    </div>
  );
}

export default App;

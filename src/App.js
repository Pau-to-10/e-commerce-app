import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";

// Render the products dinamically with a loop
import products from "./assets/db/products";
import Cart from "./components/Cart/Cart";
import logo from "./assets/img/logo2.png";

function loadItems() {
  const items = localStorage.getItem("products");

  if (items) {
    try {
      return JSON.parse(items);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      cartItems: loadItems(),
    }));
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.cartItems));
  }

  handleAddToCart(id) {
    const cartItems = this.state.cartItems;

    let index = cartItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      const items = cartItems.map((item) => {
        if (item.id === id && item.quantity < 10) {
          item.quantity = Number(item.quantity) + 1;
        }

        return item;
      });

      this.setState(() => ({
        cartItems: items,
      }));
    } else {
      this.setState((prevState) => ({
        cartItems: [
          ...prevState.cartItems,
          {
            ...products.find((prod) => prod.id === id),
            quantity: 1,
          },
        ],
      }));
    }
  }

  handleRemove(id) {
    const items = this.state.cartItems.filter((item) => item.id !== id);

    this.setState(() => ({
      cartItems: items,
    }));
  }

  handleChange(event, id) {
    const items = this.state.cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = Number(event.target.value);
      }

      return item;
    });

    this.setState(() => ({ cartItems: items }));
  }

  render() {
    const { cartItems } = this.state;

    return (
      <>
      <header> <NavBar /> </header>      
      <main className="container-fluid">
        <div className="row">
          <div className="col col-6 col-lg-8 p-4">
            <section className="row row-cols-1">
            {/* <video src="https://carontestudio.com/img/f4.mp4" autoplay="true" muted="true" loop="true"></video> */}
              <div className="col">                
                <h1 className="mb-4">LoVa</h1>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img} title={product.title}
                      price={product.price}
                      handleAddToCart={() => this.handleAddToCart(product.id)} />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Cart
            cartItems={cartItems}
            handleRemove={this.handleRemove}
            handleChange={this.handleChange} />
        </div>
      </main></>
    );
  }
}


export default App;
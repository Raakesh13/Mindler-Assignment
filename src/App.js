import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import data from "./data/products.json";
import axios from "axios";

class App extends Component {
  state = {
    products: {},
    isLoaded: false,
  };

  componentDidMount = () => {
    const config = {
      method: "get",
      url: "https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    let sortedProducts = Object.entries(data.products).sort((a, b) => {
      return b[1].popularity - a[1].popularity;
    });

    this.setState({
      products: sortedProducts,
    });
  };

  render() {
    return (
      <div className="App">
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;

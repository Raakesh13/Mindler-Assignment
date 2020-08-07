import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import axios from "axios";

class App extends Component {
  state = {
    products: {},
    isLoaded: false,
    error: "",
  };

  componentDidMount = () => {
    const config = {
      method: "get",
      url: "https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json",
      headers: {},
    };
    axios(config)
      .then((response) => {
        let sortedProducts = Object.entries(response.data.products).sort(
          (a, b) => {
            return b[1].popularity - a[1].popularity;
          }
        );

        this.setState({
          products: sortedProducts,
        });
      })
      .catch(function (error) {
        this.setState({
          error: error,
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.products ? (
          <Products products={this.state.products} />
        ) : (
          this.state.error
        )}
      </div>
    );
  }
}

export default App;

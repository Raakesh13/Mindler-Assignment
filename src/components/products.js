import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";

class Products extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    let filtered = Object.entries(this.props.products).filter((product) => {
      return (
        product[1][1].title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="Products">
        <form onSubmit={this.filterSearch}>
          <input
            className="searchbar"
            type="text"
            placeholder="search by title"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </form>
        <Table striped bordered hover className="Table">
          <thead>
            <tr className="tablehead">
              <th>Id</th>
              <th>Title</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Popularity</th>
            </tr>
          </thead>

          {filtered.map((prod) => {
            return (
              <tbody key={prod[1][0]}>
                <tr>
                  <td>{prod[1][0]}</td>
                  <td>{prod[1][1].title}</td>
                  <td className="subcategory">{prod[1][1].subcategory}</td>
                  <td className="price">{prod[1][1].price}</td>
                  <td className="popularity">{prod[1][1].popularity}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    );
  }
}

export default Products;

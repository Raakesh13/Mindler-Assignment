import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>{props.product.subcategory}</td>
          <td>{props.product.title}</td>
          <td>{props.product.price}</td>
          <td>{props.product.popularity}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Product;

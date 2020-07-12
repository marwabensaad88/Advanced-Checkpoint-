
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductTable from "./productTable.js"
import PropTypes from "prop-types";
import * as serviceWorker from "./serviceWorker";

const products = [
  { category: "Electronics ", name: "Scanners", price: " 500dt" },
  { category: "Clothes ", name: "Shoes", price: " 90dt" },
  { category: "Electronics ", name: "Tablette ", price: " 400dt" },
  { category: "Clothes ", name: "Dress", price: " 200dt" }
];



ReactDOM.render(
  <React.StrictMode>
    <ProductTable
      table={products}
      color="black "
      backgroundColor="#01796F"

    >


      <h1 style={{ color: "#8FBC8F", fontWeight: 300, fontSize: 50, textDecoration: "underline", textTransform: "uppercase", float: "left", overflow: "hidden", position: "relative" }}>
        Products
      </h1>
    </ProductTable>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";
import * as serviceWorker from "./serviceWorker";

const products = [
    { category: "Electronics ", name: "Scanners", price: " 500dt" },
    { category: "Clothes ", name: "Shoes", price: " 90dt" },
    { category: "Electronics ", name: "Tablette ", price: " 400dt" },
    { category: "Clothes ", name: "Dress", price: " 200dt" }
];
export default function ProductTable(props) {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            {props.children}
            <table border="1"
                style={{
                    textAlign: "center",
                    border: props.border,
                    backgroundColor: props.backgroundColor,
                    color: props.color,
                    height: 300,
                    width: 500
                }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: "center", color: "#F5FFFA", fontSize: 20 }}>Category</th>
                        <th style={{ textAlign: "center", color: "#F5FFFA", fontSize: 20 }}>Name</th>

                        <th style={{ textAlign: "center", color: "#F5FFFA", fontSize: 20 }}>Prices</th>
                    </tr>
                    {props.table.map((prod, index) => (
                        <tr key={index}>
                            <td>{prod.category}</td>
                            <td>{prod.name}</td>

                            <td>{prod.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ProductTable.propTypes = {
    Table: PropTypes.array,
    category: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string
};
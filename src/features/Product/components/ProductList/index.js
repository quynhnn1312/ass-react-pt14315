/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { apiProductList, selectProduct } from "../../productSlice";

function ProductList(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  useEffect(() => {
    dispatch(apiProductList());
  }, []);
  return (
    <table
      className="table table-bordered"
      id="dataTable"
      width="100%"
      cellSpacing={0}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <img
                src={product.avatar}
                className="img-thumbnail"
                alt=""
                width="150px"
              />
            </td>
            <td>{product.price}$</td>
            <td>
              <a className="btn btn-info" href="">
                Edit
              </a>{" "}
              &nbsp;
              <a className="btn btn-danger" href="">
                Remove
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductList.propTypes = {};

export default ProductList;

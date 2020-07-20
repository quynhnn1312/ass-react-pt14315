/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList";

function Main(props) {
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Product</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Product Manager</h6>
          <Link className="btn btn-success" to="product/add">
            Add Product
          </Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

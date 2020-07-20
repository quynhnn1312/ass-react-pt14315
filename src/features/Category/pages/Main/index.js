/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import CategoryList from "../../components/CategoryList";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Category</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Category Manager
          </h6>
          <Link className="btn btn-success" to="category/add">
            Add Category
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

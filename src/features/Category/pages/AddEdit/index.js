/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import CategoryForm from "../../components/CategoryForm";

function AddEdit(props) {
  const handleSubmit = (value) => {
    console.log("addSubmit", value);
  };
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Add category</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-auto font-weight-bold text-primary pull-left">
            Add category
          </h6>
        </div>
        <CategoryForm onHandleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

AddEdit.propTypes = {};

export default AddEdit;

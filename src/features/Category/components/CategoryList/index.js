/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { apiCategoryList, selectCategory } from "../../categorySlice";

function CategoryList(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  useEffect(() => {
    dispatch(apiCategoryList());
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
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
              <span
                className={
                  category.status ? "badge badge-success" : "badge badge-danger"
                }
              >
                {category.status ? "active" : "private"}
              </span>
            </td>
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

CategoryList.propTypes = {};

export default CategoryList;

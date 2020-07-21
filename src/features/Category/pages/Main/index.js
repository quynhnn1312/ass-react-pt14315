/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CategoryList from "../../components/CategoryList";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  apiCategoryList,
  selectCategory,
  apiDeleteCategory,
} from "../../categorySlice";

function Main(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  useEffect(() => {
    dispatch(apiCategoryList());
  }, []);
  const onCategoryRemoveClick = (category) => {
    dispatch(apiDeleteCategory(category.id));
    Swal.fire({
      icon: "success",
      title: "Đã xóa",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const onCategoryUpdateClick = (category) => {
    const editCategoryUrl = `/categories/${category.id}`;
    history.push(editCategoryUrl);
  };
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
          <Link className="btn btn-success" to="categories/add">
            Add Category
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <CategoryList
              categories={categories}
              onCategoryRemoveClick={onCategoryRemoveClick}
              onCategoryUpdateClick={onCategoryUpdateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

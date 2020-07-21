/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  apiProductList,
  selectProduct,
  apiDeleteProduct,
} from "../../productSlice";

function Main(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  useEffect(() => {
    dispatch(apiProductList());
  }, []);
  const onProductRemoveClick = (product) => {
    const dataRemove = {
      cateId: product.categoryId,
      proId: product.id,
    };
    dispatch(apiDeleteProduct(dataRemove));
    Swal.fire({
      icon: "success",
      title: "Đã xóa",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const onProductUpdateClick = (product) => {
    const editProductUrl = `/products/${product.id}`;
    history.push(editProductUrl);
  };
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Product</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Product Manager</h6>
          <Link className="btn btn-success" to="products/add">
            Add Product
          </Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <ProductList
              products={products}
              onProductRemoveClick={onProductRemoveClick}
              onProductUpdateClick={onProductUpdateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

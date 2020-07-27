/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import Sidebar from "./components/Sidebar";
import SortBy from "./components/SortBy";
import ShopProduct from "./components/ShopProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  apiProductList,
  selectProduct,
  apiProductByCategory
} from "../../../../createSlices/productSlice";
import { selectCategory } from "../../../../createSlices/categorySlice";
import { useParams } from "react-router-dom";

function Shop(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);

  useEffect(() => {
    if(id){
      dispatch(apiProductByCategory(id));
    }else{
      dispatch(apiProductList());
    }
  }, [id]);
  if(id) var category = categories.find((x) => x.id === id);

  return (
    <div>
      <Breadcrumb title={category ? category.name : 'Shop' } />
      <div id="content" className="main-content-wrapper">
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-1 order-md-1 order-lg-2">
                <main id="primary" className="site-main">
                  <div className="shop-wrapper">
                    <SortBy title={category ? category.name : 'Shop' } />
                    <ShopProduct products={products} />
                  </div>
                </main>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-2 order-md-2 order-lg-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {};

export default Shop;

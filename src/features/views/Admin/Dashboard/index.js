/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiProductList, selectProduct } from "../../../../createSlices/productSlice";
import { apiBlogList, selectBlog } from "../../../../createSlices/blogSlice";
import { apiTransactionList, selectTransaction } from "../../../../createSlices/transactionSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const blogs = useSelector(selectBlog);
  const transactions = useSelector(selectTransaction);

  useEffect(() => {
    dispatch(apiProductList());
    dispatch(apiBlogList());
    dispatch(apiTransactionList());
  }, [])

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fa fa-download fa-sm text-white-50" /> Generate Report
        </a>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Products
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    { products.length }
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa fa-product-hunt fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Blogs
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                  { blogs.length }
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-fw fa-table fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Transactions
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        { transactions.length }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-shopping-cart fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Money sold
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-dollar fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;

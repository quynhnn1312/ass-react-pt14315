/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function TransactionList(props) {
  return (
    <div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Information</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date booking</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STT</td>
            <td>ID</td>
            <td>Information</td>
            <td>Total</td>
            <td>Status</td>
            <td>Date booking</td>
            <td>
              <div>
                <a
                  href="#"
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#modal-lg"
                >
                  <i className="fa fa-eye" /> View
                </a>{" "}
                &nbsp;
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-success">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-ban" /> &nbsp; Đang bàn giao
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-ban" /> &nbsp; Đã bàn giao
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-ban" /> &nbsp; Hủy
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-trash-alt" /> &nbsp; Xóa
                    </a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="modal fade show" id="modal-lg" aria-modal="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Orders # <b className="transaction-id">15</b>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" id="md-content">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <a target="_blank" href="#">
                        Crown Summit Backpack 1
                      </a>
                    </td>
                    <td>
                      <img width="100px" src="#" alt="" />
                    </td>
                    <td>7.830.000đ</td>
                    <td>1</td>
                    <td>7.830.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <p>
                Thành tiền: <span id="md-total-order">15.660.000 đ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TransactionList.propTypes = {};

export default TransactionList;

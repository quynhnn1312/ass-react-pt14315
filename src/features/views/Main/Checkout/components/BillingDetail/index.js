import React from "react";
import PropTypes from "prop-types";

function BillingDetail(props) {
  return (
    <div className="checkout-form">
      <div className="section-title left-aligned">
        <h2>Billing Details</h2>
      </div>
      <form action="#">
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="first_name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              placeholder="Enter your first and last name ..."
              required
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="email_address">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email_address"
              placeholder="Enter your Email Address ..."
              required
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="p_address">
              Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="p_address"
              placeholder="Enter your Address ..."
              required
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="p_address">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="p_address"
              placeholder="Enter your Phone ..."
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="order_notes">Order Notes</label>
            <textarea
              className="form-control"
              id="order_notes"
              placeholder="Notes about your order, e.g. special notes for delivery."
              defaultValue={""}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

BillingDetail.propTypes = {};

export default BillingDetail;

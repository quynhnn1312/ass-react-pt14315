import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

ProductForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};

ProductForm.defaultProps = {
  onHandleSubmit: null,
};

function ProductForm({ onHandleSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const loadImage = (e) => {
    let output = document.getElementById("output");
    output.src = e.target.value;
  };
  const onSubmit = (data) => {
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
                }
                name="name"
                placeholder="Enter name ..."
                ref={register({ required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp; Name is
                  required
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className={
                  errors.price ? "form-control is-invalid" : "form-control"
                }
                name="price"
                placeholder="Enter price ..."
                ref={register({ required: true })}
              />
              {errors.price && errors.price.type === "required" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp; Price is
                  required
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="discount">% Discount:</label>
              <input
                type="number"
                className="form-control"
                name="discount"
                placeholder="Enter discount ..."
                ref={register}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                className={
                  errors.amount ? "form-control is-invalid" : "form-control"
                }
                name="amount"
                placeholder="Enter amount ..."
                ref={register({ required: true })}
              />
              {errors.amount && errors.amount.type === "required" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp; Amount
                  is required
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="short_des">Short description:</label>
              <textarea
                className="form-control"
                rows={2}
                defaultValue={""}
                name="short_des"
                placeholder="Enter short description ..."
                ref={register}
              />
            </div>
            <div className="form-group">
              <label htmlFor="detail">Detail:</label>
              <textarea
                className="form-control"
                rows={5}
                defaultValue={""}
                name="detail"
                placeholder="Enter detail ..."
                ref={register}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group text-center mt-3 mb-3">
              <img
                src={"/img/no_image.jpg"}
                id="output"
                className="img img-thumbnail"
                width="50%"
                alt=""
                id="output"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                className={
                  errors.image ? "form-control is-invalid" : "form-control"
                }
                name="image"
                placeholder="Enter image ..."
                id="input"
                onChange={loadImage}
                ref={register({ required: true })}
              />
              {errors.image && errors.image.type === "required" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp; Image is
                  required
                </p>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="category_id">Category:</label>
              <select
                className="form-control"
                name="category_id"
                ref={register}
              >
                <option value="">----- Category product -----</option>
                <option value="1">----- Category product -----</option>
                <option value="2">----- Category product -----</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          Add product
        </button>{" "}
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
}

export default ProductForm;

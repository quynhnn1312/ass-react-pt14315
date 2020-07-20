import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

CategoryForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};

CategoryForm.defaultProps = {
  onHandleSubmit: null,
};

function CategoryForm({ onHandleSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8 m-auto">
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Show
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          Add Category
        </button>{" "}
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;

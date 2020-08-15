import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../../../../../firebase";
import {
  selectProduct,
  apiProductList,
} from "../../../../../../createSlices/productSlice";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

ProductForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  categories: PropTypes.array,
  initialValuesEdit: PropTypes.object,
};

ProductForm.defaultProps = {
  onHandleSubmit: null,
  categories: [],
  initialValuesEdit: {},
};

function ProductForm(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState();
  const [detail, setDetail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gallleryImage, setGallleryImage] = useState();
  const { onHandleSubmit, categories, isAddMode, initialValuesEdit } = props;
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    dispatch(apiProductList());
    register({ name: "detail" });
  }, [gallleryImage]);
  const handleChangeImage = (e) => {
    let output = document.getElementById("output");
    if (e.target.files[0]) {
      const files = e.target.files[0];
      const uploadTask = storage.ref(`images/${files.name}`).put(files);
      uploadTask.on(
        "state_changed",
        () => { },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(files.name)
            .getDownloadURL()
            .then((url) => {
              output.src = url;
              setImageUrl(url);
            });
        }
      );
    }
  };

  const handleChangeGalllery = async (e) => {
    if (e.target.files) {
      const files = e.target.files;
      const arrGalllery = [];
      const arrFile = [];
      for (let file of files) {
        arrFile.push(file);
      }
      await Promise.all(arrFile.map(async(file)=>{
        storage.ref(`galllerys/${file.name}`).put(file);
        return storage
        .ref("galllerys")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          arrGalllery.push(url)
        });
      }));
      setGallleryImage(arrGalllery)
    }
  };

  const onSubmit = (data) => {
    if (initialValuesEdit.avatar) {
      imageUrl ? data.avatar = imageUrl : data.avatar = initialValuesEdit.avatar;
    } else {
      data.avatar = imageUrl;
    }
    if (initialValuesEdit.galllery) {
      gallleryImage.length > 0 ? data.galllery = gallleryImage : data.galllery = initialValuesEdit.galllery;
    } else {
      data.galllery = gallleryImage;
    }
    data.detail = detail;
    setIsSubmitting(true);
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };

  const handleOnChange = (e) => {
    setValue({ categoryId: e.target.value });
  };
  const isCheckName = (name) => {
    const checkName = products.filter((product) => {
      if (!isAddMode && product.name !== initialValuesEdit.name) {
        return product.name.toLowerCase() == name.toLowerCase();
      }
      if (isAddMode) return product.name.toLowerCase() == name.toLowerCase();
    });
    if (checkName.length > 0) return false;
    return true;
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
                ref={register({ required: true, validate: isCheckName })}
                defaultValue={initialValuesEdit.name}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Name is
                  required
                </p>
              )}
              {errors.name && errors.name.type === "validate" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Duplicate
                  product name
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
                step="0.001"
                name="price"
                placeholder="Enter price ..."
                ref={register({ required: true, min: 1 })}
                defaultValue={initialValuesEdit.price}
              />
              {errors.price && errors.price.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Price is
                  required
                </p>
              )}
              {errors.price && errors.price.type === "min" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Your
                  price must be at least 1
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="discount">% Discount:</label>
              <input
                type="number"
                className={
                  errors.discount ? "form-control is-invalid" : "form-control"
                }
                name="discount"
                placeholder="Enter discount ..."
                ref={register({
                  min: 1,
                  max: 100,
                })}
                defaultValue={initialValuesEdit.discount}
              />
              {errors.discount && errors.discount.type === "min" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Your
                  discount must be at least 1
                </p>
              )}
              {errors.discount && errors.discount.type === "max" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Your
                  discount must be no more than 100
                </p>
              )}
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
                ref={register({ required: true, min: 1 })}
                defaultValue={initialValuesEdit.amount}
              />
              {errors.amount && errors.amount.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Amount is
                  required
                </p>
              )}
              {errors.amount && errors.amount.type === "min" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Your
                  Amount must be at least 1
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="short_des">Short description:</label>
              <textarea
                className="form-control"
                rows={2}
                name="short_description"
                placeholder="Enter short description ..."
                ref={register}
                defaultValue={initialValuesEdit.short_description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="detail">Detail:</label>
              <CKEditor
                data={initialValuesEdit.detail ? initialValuesEdit.detail : ""}
                editor={ClassicEditor}
                onInit={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "200px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                  const data = editor.getData();
                  setDetail(data);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDetail(data);
                }}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group text-center mt-3 mb-3">
              <img
                src={
                  initialValuesEdit.avatar
                    ? initialValuesEdit.avatar
                    : "/admin/img/no_image.jpg"
                }
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
                type="file"
                className={
                  errors.avatar ? "form-control is-invalid" : "form-control"
                }
                name="avatar"
                id="input"
                onChange={handleChangeImage}
                ref={register({ required: initialValuesEdit.avatar ? false : true })}
              />
              {errors.avatar && errors.avatar.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Image is
                  required
                </p>
              )}
              {/* {errors.avatar && errors.avatar.type === "validate" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; The image
                  path is malformed
                </p>
              )} */}
            </div>
            <div className="form-group mt-3 mb-3">
              {!initialValuesEdit.galllery && !gallleryImage ?
                (<img
                  src="/admin/img/no_image.jpg"
                  className="img img-thumbnail"
                  width="20%"
                  alt=""
                />) : ""
              }
              {initialValuesEdit.galllery && !gallleryImage ?
                (initialValuesEdit.galllery.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className="img img-thumbnail"
                    width="20%"
                    alt=""
                  />
                ))) : ""
              }
              { initialValuesEdit.galllery && gallleryImage || !initialValuesEdit.galllery && gallleryImage ?
                (gallleryImage.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className="img img-thumbnail"
                    width="20%"
                    alt=""
                    id="output"
                  />
                ))) : ""
              }
            </div>
            <div className="form-group">
              <label htmlFor="galllery">Galllery Image:</label>
              <input
                type="file"
                className={
                  errors.galllery ? "form-control is-invalid" : "form-control"
                }
                multiple
                name="galllery"
                onChange={handleChangeGalllery}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="category_id">Category:</label>
              <select
                className={
                  errors.categoryId ? "form-control is-invalid" : "form-control"
                }
                name="categoryId"
                ref={register({ required: true })}
                value={value ? value.categoryId : initialValuesEdit.categoryId}
                onChange={handleOnChange}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && errors.categoryId.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Category
                  is required
                </p>
              )}
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="status"
                  ref={register}
                  defaultChecked={
                    initialValuesEdit.status === true ? true : false
                  }
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Show product
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          {isSubmitting ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
              ""
            )}
          {isAddMode ? "Add" : "Update"} product
        </button>{" "}
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
}

export default ProductForm;

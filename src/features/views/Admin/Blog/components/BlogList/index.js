import React from 'react'
import PropTypes from "prop-types";
import Swal from "sweetalert2/dist/sweetalert2.js";

function BlogList(props) {
  const { categories, onCategoryRemoveClick, onCategoryUpdateClick } = props;
  const onHandleRemove = (category) => {
    Swal.fire({
      title: "Chắc chắn xóa category?",
      text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Không đồng ý!",
    }).then((result) => {
      if (result.value) {
        if (!onCategoryRemoveClick) return;
        onCategoryRemoveClick(category);
      }
    });
  };
  const onUpdateClick = (category) => {
    if (!onCategoryUpdateClick) return;
    onCategoryUpdateClick(category);
  };
  return (
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
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

BlogList.propTypes = {

}

export default BlogList


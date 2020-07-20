import axiosClient from "./axiosClient";

const productApi = {
  getAll: (cateId) => {
    const url = `/categories/${cateId}/products`;
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

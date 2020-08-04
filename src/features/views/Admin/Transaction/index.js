import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import ShowPerPage from "./components/ShowPerPage";
import TransactionSearch from "./components/TransactionSearch";
import TransactionList from './components/TransactionList';

function Transaction(props) {
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchData, setSearchData] = useState();
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const onHandlePerPage = (value) => {
    setPerPage(+value);
  };
  const onSubmitSearch = (keyword) => {
    // const result = categories.filter(
    //   (category) =>
    //     category.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    // );
    // keyword == "" ? setSearchData(0) : setSearchData(result);
  };
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Transaction</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Transaction Manager
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <ShowPerPage
                      perPage={perPage}
                      onHandlePerPage={onHandlePerPage}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <TransactionSearch onSubmitSearch={onSubmitSearch} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <TransactionList
                    // categories={searchData ? searchData : categoryData}
                    // onCategoryRemoveClick={onCategoryRemoveClick}
                    // onCategoryUpdateClick={onCategoryUpdateClick}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="dataTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    {/* Showing 1 to {perPage} of {categories.length} entries */}
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <Pagination
                      prevPageText="Previous"
                      nextPageText="Next"
                      hideFirstLastPages
                      activePage={activePage}
                      itemsCountPerPage={perPage}
                      totalItemsCount={
                        100
                      }
                      pageRangeDisplayed={5}
                      itemClass="page-item"
                      linkClass="page-link"
                      onChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Transaction.propTypes = {

}

export default Transaction


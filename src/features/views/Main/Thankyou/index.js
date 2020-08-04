/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <div className="thankyou-page">
      <div context="checkout" className="container">
        <div className="header">
          <div className="wrap">
            <div className="shop logo logo--left ">
              <h1 className="shop__name">
                <Link to="/">Pebona.</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="wrap clearfix">
            <div className="row thankyou-infos">
              <div className="col-md-7 thankyou-message">
                <div className="thankyou-message-icon unprint">
                  <div className="icon icon--order-success svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72px"
                      height="72px"
                    >
                      <g fill="none" stroke="#8EC343" strokeWidth={2}>
                        <circle
                          cx={36}
                          cy={36}
                          r={35}
                          style={{
                            strokeDasharray: "240px, 240px",
                            strokeDashoffset: "480px",
                          }}
                        />
                        <path
                          d="M17.417,37.778l9.93,9.909l25.444-25.393"
                          style={{
                            strokeDasharray: "50px, 50px",
                            strokeDashoffset: "0px",
                          }}
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="thankyou-message-text">
                  <h3>Cảm ơn bạn đã đặt hàng</h3>
                  <p>
                    Một email xác nhận đã được gửi tới. Xin vui lòng kiểm tra
                    email của bạn
                  </p>
                  <div style={{ fontStyle: "italic" }}></div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 order-info">
                <div className="order-summary order-summary--custom-background-color ">
                  <div className="order-summary-header summary-header--thin summary-header--border">
                    <h2>
                      <label className="control-label">
                        Đơn hàng # sản phẩm
                      </label>
                    </h2>
                    <a
                      className="underline-none expandable expandable--pull-right mobile unprint"
                      bind-event-click="toggle(this, '.order-items')"
                      bind-class="{open: order_expand}"
                      href="#"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                  <div className="order-items mobile--is-collapsed">
                    <div className="summary-body summary-section summary-product">
                      <div className="summary-product-list">
                        <ul className="product-list"></ul>
                      </div>
                    </div>
                  </div>
                  <div className="summary-section  border-top-none--mobile ">
                    <div className="total-line total-line-subtotal clearfix">
                      <span className="total-line-name pull-left">
                        Tạm tính
                      </span>
                      <span className="total-line-subprice pull-right"></span>
                    </div>
                  </div>
                  <div className="summary-section">
                    <div className="total-line total-line-total clearfix">
                      <span className="total-line-name total-line-name--bold pull-left">
                        Tổng cộng
                      </span>
                      <span className="total-line-price pull-right"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 customer-info">
                <div className="shipping-info">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="order-summary order-summary--white no-border no-padding-top">
                        <div className="order-summary-header">
                          <h2>
                            <label className="control-label">
                              Thông tin nhận hàng
                            </label>
                          </h2>
                        </div>
                        <div className="summary-section no-border no-padding-top">
                          <p className="address-name"></p>
                          <p className="address-address"></p>
                          <p className="address-ward"></p>
                          <p className="address-ward"></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="order-summary order-summary--white no-border">
                        <div className="order-summary-header">
                          <h2>
                            <label className="control-label">
                              Thông tin thanh toán
                            </label>
                          </h2>
                        </div>
                        <div className="summary-section no-border no-padding-top">
                          <p className="address-name"></p>
                          <p className="address-address"></p>
                          <p className="address-ward"></p>
                          <p className="address-ward"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="order-summary order-summary--white no-border">
                        <div className="order-summary-header">
                          <h2>
                            <label className="control-label">
                              Hình thức thanh toán
                            </label>
                          </h2>
                        </div>
                        <div className="summary-section no-border no-padding-top">
                          <span>Thanh toán khi giao hàng (COD)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="order-summary order-summary--white no-border">
                        <div className="order-summary-header">
                          <h2>
                            <label className="control-label">
                              Hình thức vận chuyển
                            </label>
                          </h2>
                        </div>
                        <div className="summary-section no-border no-padding-top">
                          <span>Thanh toán khi giao hàng (COD)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-success unprint">
                  <Link to="/" className="btn btn-primary text-white">
                    Tiếp tục mua hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="main_footer footer unprint">
            <div className="mt10" />
          </div>
          <div
            className="modal fade"
            id="refund-policy"
            data-width
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    aria-hidden="true"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    ×
                  </button>
                  <h4 className="modal-title">Chính sách hoàn trả</h4>
                </div>
                <div className="modal-body">
                  <pre />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="privacy-policy"
            data-width
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    aria-hidden="true"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    ×
                  </button>
                  <h4 className="modal-title">Chính sách bảo mật</h4>
                </div>
                <div className="modal-body">
                  <pre />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="terms-of-service"
            data-width
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    aria-hidden="true"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    ×
                  </button>
                  <h4 className="modal-title">Điều khoản sử dụng</h4>
                </div>
                <div className="modal-body">
                  <pre />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Thankyou.propTypes = {};

export default Thankyou;

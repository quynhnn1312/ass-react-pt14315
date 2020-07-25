/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header className="header bgc-white header-type-1">
      <div className="header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 order-2 col-sm-6 order-sm-2 col-md-4 order-md-1 col-lg-3">
              <div className="header-search-area">
                <form action="#">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search entire store here ..."
                    />
                    <div className="input-group-append">
                      <button className="header-search-btn" type="submit">
                        <i className="pe-7s-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2 col-lg-6">
              <div className="logo">
                <a href="/">
                  <img
                    src="/main/images/logo.png"
                    alt="Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-6 order-3 col-sm-6 col-md-4 col-lg-3">
              <div className="header-cart-area">
                <div className="header-cart">
                  <div className="btn-group">
                    <button className="btn-link dropdown-toggle icon-cart">
                      <i className="pe-7s-shopbag" />
                      <span className="count-style">2</span>
                    </button>
                    <div className="dropdown-menu">
                      <div className="shopping-cart-content">
                        <ul className="list-unstyled">
                          <li className="single-cart-item media">
                            <div className="shopping-cart-img mr-4">
                              <a href="/">
                                <img
                                  className="img-fluid"
                                  alt="Cart Item"
                                  src="/main/images/cart/cart-1.jpg"
                                />
                                <span className="product-quantity">1x</span>
                              </a>
                            </div>
                            <div className="shopping-cart-title media-body">
                              <h4>
                                <a href="/">Rival Field Messenger</a>
                              </h4>
                              <p className="cart-price">$120.00</p>
                              <div className="product-attr">
                                <span>Size: S</span>
                                <span>Color: Black</span>
                              </div>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="/">
                                <i className="ion ion-md-close" />
                              </a>
                            </div>
                          </li>
                          <li className="single-cart-item media">
                            <div className="shopping-cart-img mr-4">
                              <a href="/">
                                <img
                                  className="img-fluid"
                                  alt="Cart Item"
                                  src="/main/images/cart/cart-2.jpg"
                                />
                                <span className="product-quantity">2x</span>
                              </a>
                            </div>
                            <div className="shopping-cart-title media-body">
                              <h4>
                                <a href="/">Fusion Backpack</a>
                              </h4>
                              <p className="cart-price">$200.00</p>
                              <div className="product-attr">
                                <span>Color: White</span>
                                <span>Accessories: Yes</span>
                              </div>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="/">
                                <i className="ion ion-md-close" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-total">
                          <h4>
                            Sub-Total : <span>$320.00</span>
                          </h4>
                          <h4>
                            Total : <span>$320.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-btn">
                          <a className="default-btn" href="/">
                            view cart
                          </a>
                          <a className="default-btn" href="/">
                            checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-inline">
                  <li className="top-links list-inline-item">
                    <div className="btn-group">
                      <button className="btn-link dropdown-toggle">
                        <i className="pe-7s-config" />
                      </button>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a href="/">Register</a>
                          </li>
                          <li>
                            <a href="/">Login</a>
                          </li>
                          <li>
                            <a href="/">My Account</a>
                          </li>
                          <li>
                            <a href="/">Wishlist</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* end of header-cart-area */}
            </div>
          </div>
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of header-top */}
      {/* Start of Main and Mobile Navigation */}
      <div className="main-nav-area bgc-white">
        <div className="container">
          <nav id="main_nav" className="stellarnav">
            <ul className="mb-0">
              <li>
                <a href="index.html">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Shop</span>   &nbsp;
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/">FAQs Page</a>
                  </li>
                  <li>
                    <a href="/">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © Your Website 2020</span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

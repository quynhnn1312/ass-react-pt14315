/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact, icon }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link className="nav-link" to={to}>
        <i className={icon} />
        <span>{label}</span>
      </Link>
    </li>
  );
}
function Sidebar(props) {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to="/dashboard"
        label="Dashboard"
        icon="fas fa-fw fa-tachometer-alt"
      />
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Addons</div>
      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to="/products"
        label="Product"
        icon="fas fa-fw fa-peace"
      />
      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to="/categories"
        label="Category"
        icon="fas fa-fw fa-bars"
      />
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
}

Sidebar.propTypes = {};

export default Sidebar;

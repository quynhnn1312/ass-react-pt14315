/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddEdit from "./pages/AddEdit";
import NotFound from "./../../components/NotFound";

function Product(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:productId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
}

Product.propTypes = {};

export default Product;

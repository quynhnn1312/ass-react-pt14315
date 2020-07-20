/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddEdit from "./pages/AddEdit";
import NotFound from "./../../components/NotFound";

function Category(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:categoryId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
}

Category.propTypes = {};

export default Category;

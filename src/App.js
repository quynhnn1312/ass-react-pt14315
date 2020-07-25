/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import LayoutMain from "./features/layouts/LayoutMain";
import LayoutAdmin from "./features/layouts/LayoutAdmin";
import NotFound from "./components/Admin/NotFound/index";

// Admin
const Dashboard = React.lazy(() => import("./features/views/Admin/Dashboard"));
const Product = React.lazy(() => import("./features/views/Admin/Product"));
const Category = React.lazy(() => import("./features/views/Admin/Category"));

// Main
const Home = React.lazy(() => import("./features/views/Main/Home"));
const Shop = React.lazy(() => import("./features/views/Main/Shop"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="text-center ">
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              />
              Loading...
            </button>
          </div>
        }
      >
        <Router>
          <Switch>
            <Route path="/admin/:path?">
              <LayoutAdmin>
                <Switch>
                  <Redirect exact from="/admin/" to="/admin/dashboard" />

                  <Route path="/admin/dashboard" component={Dashboard} />
                  <Route path="/admin/products" component={Product} />
                  <Route path="/admin/categories" component={Category} />
                  <Route component={NotFound} />
                </Switch>
              </LayoutAdmin>
            </Route>
            <Route>
              <LayoutMain>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/shops" component={Shop} />
                  <Route component={NotFound} />
                </Switch>
              </LayoutMain>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

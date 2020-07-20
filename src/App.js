/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import NotFound from "./components/NotFound/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Dashboard = React.lazy(() => import("./features/Dashboard"));
const Product = React.lazy(() => import("./features/Product"));
const Category = React.lazy(() => import("./features/Category"));

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
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Header />
                <Switch>
                  <Redirect exact from="/" to="/dashboard" />

                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/product" component={Product} />
                  <Route path="/category" component={Category} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

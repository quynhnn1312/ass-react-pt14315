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
import ButtonScroll from "./components/ButtonScroll";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import NotFound from "./components/NotFound/index";
import Sidebar from "./components/Sidebar/index";

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
                  <Route path="/products" component={Product} />
                  <Route path="/categories" component={Category} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
          <ButtonScroll />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

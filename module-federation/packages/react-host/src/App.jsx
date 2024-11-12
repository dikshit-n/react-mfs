import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ProductRouter from "product/Router"
import AccountRouter from "account/Router"
import AssessmentRouter from "assessment/Router"

import HostRouter from "./Router";
import Footer from "./Footer";

import "./index.scss";

const App = () => {

  return (
    <BrowserRouter>
      <HostRouter />
      <ProductRouter />
      <AccountRouter />
      <AssessmentRouter />
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

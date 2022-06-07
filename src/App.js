import React from 'react';
import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";
import Chatbox from "./components/Chatbox";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const Content = React.lazy(() => import('./components/Content'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const CartDetail = React.lazy(() => import('./components/CartDetail'));
const ListProduct = React.lazy(() => import('./components/ListProduct'));
const ListProductByCategory = React.lazy(() => import('./features/ListProductByCategory'));
const ProductDetailFeature = React.lazy(() => import('./features/ProductDetailFeature'));
const Login = React.lazy(() => import('./components/Login'));
const Register = React.lazy(() => import('./components/Register'));
const Bill = React.lazy(() => import('./components/Bill'));
const Payment = React.lazy(() => import('./components/Payment'));
const PersonalInfo= React.lazy(() => import('./components/PersonalInfo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading ...</h2>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Content} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/product/:id" component={ProductDetailFeature} />
            <Route exact path="/cart" component={CartDetail} />
            <Route exact path="/category/:id" component={ListProductByCategory} />
            <Route exact path="/bill/:iduser" component={Bill} />
            <Route exact path="/payment/:iduser" component={Payment} />
            <Route exact path="/personal-info/:iduser" component={PersonalInfo} />
            <Chatbox />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>


    </div>
  );
}

export default App;

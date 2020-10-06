import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Header } from "./components/Common/Header/Header";
import { Footer } from "./components/Common/Footer/Footer";

import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";

import { UiNotification } from "./components/Ui/UiNotification/UiNotification";
import { setLoginSuccess } from "./store/login/actions";

const App = () => {
  const dispach = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispach(setLoginSuccess());
    }
  });

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <UiNotification />
        <Header />
        <main className="main">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

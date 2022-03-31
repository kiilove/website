import { Grid } from "@mui/material";
import styled from "styled-components";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Desktop from "./pages/Desktop";
import Index from "./pages/Index";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Order from "./pages/Order";
import OrderFooter from "./pages/OrderFooter";
import LgGramMotion from "./pages/LgGramMotion";
import Cart from "./pages/Cart";
import { createContext, useContext, useEffect } from "react";

export const cartContext = createContext({ id: 1 });
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialContext = { id: 1, text: "test" };
  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <SubHeader />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/desktop">
              <Desktop />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/orderPage/:modelId/:modelPrice">
              <Order />
            </Route>
            <Route path="/lgGram">
              <LgGramMotion />
            </Route>
            <Route path="/cart">
              <cartContext.Provider value={initialContext}>
                <Cart />
              </cartContext.Provider>
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;

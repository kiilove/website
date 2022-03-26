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
import Product from "./components/Product";
import Footer from "./components/Footer";
import Order from "./components/Order";
import OrderFooter from "./components/OrderFooter";
import LgGramMotion from "./pages/LgGramMotion";

function App() {
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
            <Route path="/orderPage">
              <Order />
            </Route>
            <Route path="/lgGram">
              <LgGramMotion />
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

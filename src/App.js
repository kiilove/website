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
            <Route exact path="/desktop">
              <Desktop />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;

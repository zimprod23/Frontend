import React from "react";
import "./App.css";
//import "antd/dist/antd.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./Components/Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/Login";
import AdminApp from "./Components/AdminComponent/AdminApp";
import Emp from "./Components/EmployeeComponent/Emp";
import NotFoundPage from "./Components/Results/NotFoundPage";


function App() {
  const [isOpen, setisOpen] = useState(false)
  const toogle = () => {
    setisOpen(!isOpen);
  }
  return (
    <>
      <Router>
        <Switch>
          <Route  exact path="/" component={LandingPage} />
          <Route  path="/home" component={LandingPage} />
          <Route  path="/admin" component={AdminApp} />
          <Route  path="/login" component={LoginPage} />
          <Route  path="/emp" component={Emp} />
          <Route  path="**" component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;

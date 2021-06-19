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
import Auth from './Components/hoc/hocAuth'


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
          <Route  path="/admin" component={Auth(AdminApp,true)} />
          <Route  path="/login" component={Auth(LoginPage,true)} />
          <Route  path="/emp" component={Auth(Emp,true)} />
          <Route  path="**" component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;

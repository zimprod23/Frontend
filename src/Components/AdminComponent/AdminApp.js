import React, { useState } from "react";
//import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import "./AdminPageStyles/AdminGlobal.css"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import MakeAProj from "./StartupPage/MakeAProj";


function AdminApp() {
    return (
        <div>
            <Router>
              <NavBar />
                <Switch>
                <Route  path="/" component={MakeAProj}/>
                </Switch>
            </Router>
        </div>
    )
}

export default AdminApp

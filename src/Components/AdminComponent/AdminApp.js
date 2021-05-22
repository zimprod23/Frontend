import React, { useState } from "react";
//import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import "./AdminPageStyles/AdminGlobal.css"
import { Route, Switch, BrowserRouter as Router,useRouteMatch } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import MakeAProj from "./StartupPage/MakeAProj";
import Projects from "./ProjectsPage/Projects";
import EmployesCRUD from "./EmployesCrud/EmployesCRUD";


function AdminApp() {


    return (
        <div>
            {/* <Router> */}
              <NavBar />
                <Switch>
                   <Route  exact path="Projects" component={Projects} />
                   <Route   path="Home" component={MakeAProj}/>
                   <Route   path="/" component={EmployesCRUD} />   
                </Switch>
            {/* </Router> */}
        </div>
    )
}

export default AdminApp

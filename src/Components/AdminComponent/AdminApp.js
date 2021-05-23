import React, { useState } from "react";
//import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import "./AdminPageStyles/AdminGlobal.css"
import { Route, Switch, BrowserRouter as Router,useRouteMatch } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import MakeAProj from "./StartupPage/MakeAProj";
import Projects from "./ProjectsPage/Projects";
import EmployesCRUD from "./EmployesCrud/EmployesCRUD";
import AddEmployee from "./EmployesCrud/AddEmployee";
import ProjectCRUD from "./ProjectsCrud/ProjectCrud";


function AdminApp() {


    return (
        <div>
            {/* <Router> */}
              <NavBar />
                <Switch>
                   <Route  path="/" component={Projects} />
                   <Route exact  path="/Projects" component={ProjectCRUD} />  
                   <Route exact  path="/Employees" component={EmployesCRUD} />
                   <Route exact  path="/Employees/Add_Emp" component={AddEmployee} />   
                </Switch>
            {/* </Router> */}
        </div>
    )
}

export default AdminApp

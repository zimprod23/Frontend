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
import AddProject from "./ProjectsCrud/AddProject";
import ProjectDetail from "./ProjectsCrud/ProjectDetails/ProjectDetail";
import TaskDetails from "./ProjectsCrud/TaskDetails/TaskDetails";
import Bi from "./BI/Bi";


function AdminApp(props) {


    return (
        <div>
            {/* <Router> */}
              <NavBar />
                   <Route exact path="/admin" component={Projects} />
                   <Route exact path="/admin/projects" component={ProjectCRUD} />  
                   <Route exact path="/admin/employees" component={EmployesCRUD} />
                   <Route exact path="/admin/employees/add_Emp" component={AddEmployee} />
                   <Route exact path="/admin/project/add_Project" component={AddProject} />  
                   <Route exact path="/admin/projects/:project_ID" component={ProjectDetail} />  
                   <Route exact path="/admin/projects/:project_ID/:task_ID" component={TaskDetails} />  
                   <Route exact path="/admin/bi" component={Bi} />               
            {/* </Router> */}
        </div>
    )
}

export default AdminApp

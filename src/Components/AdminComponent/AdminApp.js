import React, { useState,useEffect } from "react";
//import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import "./AdminPageStyles/AdminGlobal.css"
import { Redirect, Route, Switch, BrowserRouter as Router,useRouteMatch } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import NewEmpProvider from './Utils/NewEmpProvider';
import Projects from "./ProjectsPage/Projects";
import EmployesCRUD from "./EmployesCrud/EmployesCRUD";
import AddEmployee from "./EmployesCrud/AddEmployee";
import ProjectCRUD from "./ProjectsCrud/ProjectCrud";
import AddProject from "./ProjectsCrud/AddProject";
import ProjectDetail from "./ProjectsCrud/ProjectDetails/ProjectDetail";
import TaskDetails from "./ProjectsCrud/TaskDetails/TaskDetails";
import Bi from "./BI/Bi";
import EmpProphile from "./EmployesCrud/EmpProphile";
import { useDispatch,useSelector } from 'react-redux'
import { checkAuthenticated,loadUser } from '../../actions/authAction'

function AdminApp(props) {
     const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(checkAuthenticated());
    //     dispatch(loadUser())
    // }, [])

   if(auth && auth.user && !auth.user.is_admin){
    return (
        <div>
            {/* <Router> */}
              <NavBar />
                   <Route exact path="/admin" component={Projects} />
                   <Route exact path="/admin/projects" component={ProjectCRUD} />  
                   <Route exact path="/admin/project/add_Project" component={AddProject} />  
                   <Route exact path="/admin/projects/:project_ID" component={ProjectDetail} />  
                   <Route exact path="/admin/projects/:project_ID/:task_ID" component={TaskDetails} />  
                   <Route exact path="/admin/bi" component={Bi} />     
                   <Route exact path="/admin/employees" component={EmployesCRUD} />
                   <Route exact path="/admin/employees/:emp_ID" component={EmpProphile} />
                   <NewEmpProvider>
                   <Route exact path="/admin/employee/add_Emp" component={AddEmployee} />
                   </NewEmpProvider>          
            {/* </Router> */}
        </div>
    )
   }else{
       return <Redirect to={'/emp'}/>
   }
   
}

export default AdminApp

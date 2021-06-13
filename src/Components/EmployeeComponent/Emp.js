import React from 'react'
import { Route } from 'react-router'
import EmpDahboard from './EmployeeDashboard/EmpDahboard'
import Prophile from './EmpProphile/Prophile'
import MenuHeader from './Menu/Menu'

function Emp() {
    return (
        <div>
            <MenuHeader />
            <Route exact path="/emp" component={Prophile}/>
            <Route exact path="/emp/dashboard" component={EmpDahboard}/>
        </div>
    )
}

export default Emp

import React from 'react'
import { Route } from 'react-router'
import Prophile from './EmpProphile/Prophile'

function Emp() {
    return (
        <div>
            <Route exact path="/emp" component={Prophile}/>
            <Route exact path="/emp/dashboard" component={Prophile}/>
        </div>
    )
}

export default Emp

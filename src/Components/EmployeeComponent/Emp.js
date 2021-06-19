import React, { useEffect } from 'react'
import { Route,Redirect } from 'react-router'
import EmpDahboard from './EmployeeDashboard/EmpDahboard'
import Prophile from './EmpProphile/Prophile'
import MenuHeader from './Menu/Menu'
import { useSelector,useDispatch } from 'react-redux'
import {loadUser,checkAuthenticated} from '../../actions/authAction'


function Emp() {
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser());
        dispatch(checkAuthenticated())
    }, [])
    
    const auth = useSelector(state => state.auth)
    
    if(auth && auth.isAthenticated && auth.isAthenticated == true){
        return (
            <div>
                <MenuHeader />
                <Route exact path="/emp" component={Prophile}/>
                <Route exact path="/emp/dashboard" component={EmpDahboard}/>
            </div>
        )
    }else{
        return <Redirect to={'/'} />
    }
}

export default Emp

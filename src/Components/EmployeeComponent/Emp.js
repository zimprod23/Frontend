import React, { useEffect } from 'react'
import { Route,Redirect } from 'react-router'
import EmpDahboard from './EmployeeDashboard/EmpDahboard'
import Prophile from './EmpProphile/Prophile'
import MenuHeader from './Menu/Menu'
import { Skeleton } from 'antd'
import { useSelector,useDispatch } from 'react-redux'
import {loadUser,checkAuthenticated} from '../../actions/authAction'


function Emp() {
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser());
        dispatch(checkAuthenticated())
    }, [])
    
    const auth = useSelector(state => state.auth)
    
    if(auth && auth.user && !auth.user.is_admin){
        return (
            <div>
                <MenuHeader />
                <Route exact path="/emp" component={Prophile}/>
                <Route exact path="/emp/dashboard" component={EmpDahboard}/>
            </div>
        )
    }else{
        if(auth && auth.user && auth.user.is_admin)
        return <Redirect to={'/admin'}/>
        else{
            return <Skeleton active/>
        }
    }
}

export default Emp

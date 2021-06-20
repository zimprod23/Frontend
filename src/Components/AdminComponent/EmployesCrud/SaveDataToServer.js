import React,{useEffect,useContext} from 'react'
import WaitForVerification from '../../Results/WaitForVerification';
import { Button,Skeleton } from 'antd';
import {Link} from 'react-router-dom'
import { EmpCtxt } from '../Utils/NewEmpProvider'
import { useDispatch,useSelector } from 'react-redux'
import {create_user_prophile} from '../../../actions/empAction'


function SaveDataToServer() {
    const dispatch = useDispatch();
    const emp = useSelector(state => state.emp)
    const { NewEmp,NewPro } = useContext(EmpCtxt);
    const [formData, setformData] = NewEmp;
    const [profileData, setprofileData] = NewPro 
    useEffect(() => {
        // console.log(formData)
        // console.log(profileData)
        dispatch(create_user_prophile(formData,profileData))
    }, [])
    return (
        <div>
             { emp.userCreated?
              <WaitForVerification title="The user account has been created"
                 subTitle="Waiting for the Employee to activate the account">
                    <Link to={'/admin'}><Button type="primary">End</Button></Link>
              </WaitForVerification>:emp.upload_err === true?
              <WaitForVerification status="error" title="User Creation Failed"
              subTitle="Ooops something went wrong while creating the prophile">
                  <Link to={'/admin'}><Button type="primary">End</Button></Link>
           </WaitForVerification>:<Skeleton active />
            }
        </div>
    )
}

export default SaveDataToServer

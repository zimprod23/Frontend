import React,{useEffect,useContext} from 'react'
import WaitForVerification from '../../Results/WaitForVerification';
import { Button,Skeleton } from 'antd';
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { activate_account } from '../../../actions/authAction'


function ActivateAccount(props) {
    const dispatch = useDispatch();
    const emp = useSelector(state => state.emp)
    const uid = props.match.params.uid;
    const token = props.match.params.token;

    useEffect(() => {
        let data = {
            uid:uid,
            token:token
        }
        dispatch(activate_account(data))
    }, [])

    return (
        <div>
             { !emp.account_activated_err?
              <WaitForVerification status="success" title="Successfully Avtivated this Account"
                 subTitle="Your account is now active">
                    <Link to={'/admin'}><Button type="primary">End</Button></Link>
              </WaitForVerification>:emp.upload_err?
              <WaitForVerification status="error" title="User Account Activation Failed"
              subTitle="Ooops something went wrong while creating the prophile">
                  <Link to={'/admin'}><Button type="primary">End</Button></Link>
           </WaitForVerification>:<Skeleton active />
            }
        </div>
    )
}

export default ActivateAccount

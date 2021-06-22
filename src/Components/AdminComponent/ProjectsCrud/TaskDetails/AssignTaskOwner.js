import React,{useState,useEffect} from 'react'
import { Modal, Button,Select,message } from 'antd';
import {useSelector} from 'react-redux'
import axios from 'axios';


const {Option} = Select
function AssignTaskOwner(props)  {
   
   const auth = useSelector(state => state.auth)
   const [loading, setloading] = useState(false)
   const [visible, setvisible] = useState(false)
   const [employee, setemployee] = useState(null)
   const [tasrgetEmployee, settasrgetEmployee] = useState(null)

   useEffect(() => {
    if(auth.user)
    axios.get(`http://127.0.0.1:8000/profile/${auth.user.id}/All`).then(res => {
       setemployee(res.data)
    }).catch(err => {
        message.err("Could not fetch employee try after creating the task")
    })
   // axios.get().then().catch()
}, [auth.user])


   const showModal = () => {
      setvisible(true)
    };
  
  const  handleOk = () => {
      //console.log(props.task)
      //alert(tasrgetEmployee)
      axios.put(`http://127.0.0.1:8000/task/${props.task.id_st}/to-emp/${tasrgetEmployee}`).then(res => {
        message.success("Task Affected to the employee")
        setloading(true)
        setTimeout(() => {
          setloading(false)
          setvisible(false)
           window.location.reload()
        }, 2000);
    }).catch(err => {
        message.error('could not affect task')
    })
   
    };
  
   const handleCancel = () => {
      setvisible(false)
    };
  
      return (
        <>
        <div >
        <Button type="primary" onClick={showModal}>
            Assign the task
          </Button>
        </div>
          <Modal
            visible={visible}
            title={props.task.emp?'Change employee':'affect task'}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>,
            ]}
          >
            <Select placeholder="Please select an owner" style={{width:"400px"}} onChange={(e) => settasrgetEmployee(e)}>
            {
                employee && employee.length > 0 && employee.map((item,index) => {
                    return(
                        <>
                            <Option value={item.id_p}>{item.account.first_name},{item.account.last_name} ({item.account.username})</Option>
                        </>
                    )
                })
            }
            </Select>
          </Modal>
        </>
      );

  }


  export default AssignTaskOwner
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addNewTask } from '../../../../actions/taskAction';
import axios from 'axios';


const { Option } = Select;

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

function DrawerForm(props) {
  const auth = useSelector(state => state.auth)
  const [visible, setvisible] = useState(false)
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [employee, setemployee] = useState(null)

  useEffect(() => {
      if(auth.user)
      axios.get(`http://127.0.0.1:8000/profile/${auth.user.id}/all`).then(res => {
         setemployee(res.data)
      }).catch(err => {
          message.err("Could not fetch employee try after creating the task")
      })
     // axios.get().then().catch()
  }, [auth.user])

  const showDrawer = () => {
    setvisible(true)
  };

  const onClose = () => {
    setvisible(false)
  };

  const OnFinish = (values)=> {
     let data = {
        title: values.title,
        desc: values.desc,
        type: values.type,
        phase: values.phase,
        nv: values.nv,
        start_before:formatDate(values.start_before)?formatDate(values.start_before):null ,
        end_before: formatDate(values.end_before)?formatDate(values.end_before):null,
        strat_after_tasks: values.strat_after_tasks?values.strat_after_tasks:[],
        emp: values.emp?values.emp:null,
        project: props.proj
     }
     console.log(data)
     dispatch(addNewTask(data))
  }


    return (
      <>
        <Button  onClick={showDrawer} type="primary" icon={<PlusOutlined />} size={"large"}>
          Add New Task
        </Button>
        <Drawer
          title="Create a new Task"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              {/* <Button onClick={onClose} type="primary">
                Submit
              </Button> */}
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark 
            onFinish={OnFinish}
            form={form}
           scrollToFirstError
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true, message: 'Please enter tasks title' }]}
                >
                  <Input placeholder="Please enter tasks name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please enter the tasks type' }]}
                >
                       <Select>
                            <Select.Option value="St">Story</Select.Option>
                            <Select.Option value="T">Task</Select.Option>
                        </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: false, message: 'Please select tasks State' }]}
                >
                  <Select placeholder="Please select a State" defaultValue={['C']} disabled>
                        <Select.Option value="C">Created</Select.Option>
                        <Select.Option value="A">Affected</Select.Option>
                        <Select.Option value="Inp">In progress</Select.Option>
                        <Select.Option value="D">Done</Select.Option>
                        <Select.Option value="Ca">Cancelled</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phase"
                  label="Phase"
                  rules={[{ required: true, message: 'Please choose the Phase' }]}
                >
                  <Select placeholder="Please choose the phase">
                        <Select.Option value="In">Initial</Select.Option>
                        <Select.Option value="D">Dev</Select.Option>
                        <Select.Option value="T">Test</Select.Option>
                        <Select.Option value="Do">Documentation</Select.Option>
                        <Select.Option value="Pr">Production</Select.Option>
                        <Select.Option value="M">Maintenance</Select.Option>
                        <Select.Option value="Ot">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

  {/* in this part we will fetch data */}

  <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="emp"
                  label="Owner"
                  rules={[{ required: false, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                         {
                             employee && employee.length > 0 && employee.map((item,index) => {
                                 return(
                                     <>
                                         <Option value={item.id_p}>{item.account.username}</Option>
                                     </>
                                 )
                             })
                         }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="nv"
                  label="Tasks Level"
                  rules={[{ required: false, message: 'Please choose the level' }]}
                >
                  <Select placeholder="Please choose the level">
                    <Option value="1">easy</Option>
                    <Option value="2">meduim</Option>
                    <Option value="3">advanced</Option>
                    <Option value="4">hard</Option>
                    <Option value="5">super hard</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
    
          {/* Fetching The backlog Items */}

          <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="strat_after_tasks"
                  label="start after task"
                  rules={[{ required: false, message: 'Please select tasks' }]}
                >
                  <Select placeholder="Please select tasks" 
                   mode="multiple"
                   allowClear
                   //onChange={handleChange}
                  >
                         {
                             props.backlogItems &&  props.backlogItems.map((item,index) => {
                                 return(
                                     <>
                                         <Option value={item.id_st}>{item.title}</Option>
                                     </>
                                 )
                             })
                         }
                  </Select>
                </Form.Item>
              </Col>
            </Row>


            <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                  name="start_before"
                  label="Start after"
                  rules={[{ required: false, message: 'Please choose the date' }]}
                >
                  <DatePicker/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="end_before"
                  label="End Before"
                  rules={[{ required: false, message: 'Please choose the date' }]}
                >
                  <DatePicker
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="desc"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter description" />
                </Form.Item>
                <br />
                <Form.Item label="Submit">
                <Button type={'primary'} htmlType="submit">Create Task</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );

}

export default DrawerForm


/*
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultActiveFirstOption>
        <Select.Option value="86">DH</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row justify={"center"}>
         <Col span={24}>
              
         <Form
         onFinish={OnFinish}
         form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          prefix:"DH"
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        scrollToFirstError
      >
        <Form.Item label="Project Title" name="Project_Title" 
        rules={[
          {
            required: true,
            message: 'Please input The project Title!',
          },
        ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Type" name="type" 
         rules={[
          {
            required: true,
            message: 'Please input The project type!',
          },
        ]}
        >
          <Select>
            <Select.Option value="I">Interne</Select.Option>
            <Select.Option value="E">Externe</Select.Option>
            <Select.Option value="Ed">Educatif</Select.Option>
            <Select.Option value="Ot">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Secteur" name="secteur" 
         rules={[
          {
            required: true,
            message: 'Please input The project field!',
          },
        ]}
        >
             <Select>
            <Select.Option value="RS">reseausociale</Select.Option>
            <Select.Option value="Blog">Bolg</Select.Option>
            <Select.Option value="E-com">e-commerce</Select.Option>
            <Select.Option value="VG">Video-games</Select.Option>
            <Select.Option value="AI">Artificial intelligence</Select.Option>
            <Select.Option value="onS">online-services</Select.Option>
            <Select.Option value="dig">digitalisation</Select.Option>
            <Select.Option value="Ot">other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Device" name="device"
         rules={[
          {
            required: true,
            message: 'Please input The project Device!',
          },
        ]}
        >
          
          <Select>
            <Select.Option value="Mo">Mobile</Select.Option>
            <Select.Option value="Web">Web</Select.Option>
            <Select.Option value="De">desktop</Select.Option>
            <Select.Option value="Se">serveur</Select.Option>
            <Select.Option value="Em">Embedded system</Select.Option>
            <Select.Option value="Ot">other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={"description"} label="Description" 
         rules={[
          {
            required: true,
            message: 'Please input The project Description!',
          },
        ]}
        >
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Start Date" name="date_start" 
         rules={[
          {
            required: true,
            message: 'Please input The project start date!',
          },
        ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Date Limite" name="date_limite" 
         rules={[
          {
            required: true,
            message: 'Please input The project limite date!',
          },
        ]}
        >
          <DatePicker />
        </Form.Item>
        
        <Form.Item label="Bugjet" name="budget"  rules={[
          {
            required: true,
            message: 'Please input The projects budget ',
          },
        ]}>
          <Input addonBefore={prefixSelector}/>
        </Form.Item>
        <Form.Item label="Button">
          <Button type={'primary'} htmlType="submit">Create Project</Button>
        </Form.Item>
      </Form>
      */
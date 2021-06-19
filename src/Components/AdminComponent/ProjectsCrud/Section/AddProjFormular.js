import React, { useState,useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,Col,
  message
} from 'antd';
import { addProject } from '../../../../actions/projectAction';
import { useSelector,useDispatch } from 'react-redux'

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

function VerifyEnteries(object) {
  var errIndex = 0
  Object.entries(object).forEach((e,i) => {
     if(e[1] == null || e[1] == '')errIndex++
  })
  return errIndex>2
}

function AddProjectFormular() {
  const project = useSelector(state => state.project);
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState('large');
  const [form] = Form.useForm();
  const [projdata, setprojdata] = useState({
         title:null,
        desc :null,
        type:null,
        secteur:null,
        Device:null,
        budget:null,
        start_date:null,
        date_limit:null,
        admin : 1
  })
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const OnFinish = (values)=> {
    console.log(values)
     setprojdata({
        title:values.Project_Title,
        desc:values.description,
        type:values.type,
        secteur:values.secteur,
        Device:values.device,
        budget:values.budget,
        start_date:formatDate(values.date_start),
        date_limit:formatDate(values.date_limite),
        admin:1
     })
     console.log(VerifyEnteries(projdata))
     //dispatch(addProject(projdata));
    // project.proj_added?message.success('Project Added with success'):message.error('Cant add this project');
  }

  useEffect(() => {
    if(!VerifyEnteries(projdata)){
      dispatch(addProject(projdata));
    }
  }, [projdata.title])

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
               
         </Col>
    </Row>
  );
};

export default AddProjectFormular
import React,{useState,useEffect,useContext} from 'react'
import { Col, Row,Input,Form,Button,Typography,Select } from "antd";
import UploadPic from '../Utils/Upload';
import UploadPicture from '../Utils/UploadImage';
import { EmpCtxt } from '../Utils/NewEmpProvider'

const {Title} = Typography;

function RightSideFormular(props) {

    const {NewPro} = useContext(EmpCtxt)
    const [profileData, setprofileData] = NewPro 
    const [cv, setcv] = useState("");
    const [image, setimage] = useState("")
    const [xp, setxp] = useState(null)
    const [sal, setsal] = useState(null)
    const [domain, setdomain] = useState(null)
    useEffect(() => {
    //    console.log("Data from Right")
    //    console.log(cv);
    //    console.log(image);
       setprofileData({
           ...profileData,
           image:image,
           CV:cv,
           XP:xp,
           domaine:domain
       })
    }, [cv,image])

    const onSalChange = (e,v) => {
        setsal(e.target.value)
    }
    const onDomainChange = (e,v) =>{
        setdomain(v.value)
    }
    const onXpChange = (e) => {
        setxp(e.target.value)
    }
   useEffect(() => {
    setprofileData({
        ...profileData,
        XP:xp,
        domaine:domain,
        sal:parseFloat(sal)
    })

   }, [domain,xp,sal])
    useEffect(() => {
       //console.log(profileData)
    }, [profileData])

    const savePro = (e) => {
        if(xp && domain && sal){
            props.onSave(true)
       }else{
           props.onSave(false)
       }
    }
    
    return (
        <div className="Add-Formular">
            <Row justify="center">
                    <Col span={24}>
                    <div id="Upload">
                        <br/>
                        <Col span={24}>
                            <Title level={3}>Upload A picture</Title>
                             <UploadPicture  onImgChange={(val) => setimage(val)}/>
                        </Col> 
                         <Col span={24}>
                         <Title level={3}>Upload Resume</Title>
                             <UploadPic  onCvChange={(val) => setcv(val)}/>
                         </Col>
                         <br/>
                         <Col span={24}>
                         <Title level={3}>Profile infos</Title>
                              <Form name="OtherData">
                              <Form.Item
                                    name="Domaine"
                                    label="Field"
                                    tooltip="Your Dev Field?"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Domain!',
                                        },
                                        ]}
                                        >
                                        <Select value={domain} onChange={onDomainChange}>
                                            <Select.Option value="Frontend Dev">Frontend Dev</Select.Option>
                                            <Select.Option value="Backend Dev">Backend Dev</Select.Option>
                                            <Select.Option value="Tester">Tester</Select.Option>
                                            <Select.Option value="Database Administrator">Database Administrator</Select.Option>
                                            <Select.Option value="Systems Administrator">Systems Administrator</Select.Option>
                                            <Select.Option value="Security Specialist">Security Specialist</Select.Option>
                                            <Select.Option value="Project Manager">Project Manager</Select.Option>
                                            <Select.Option value="Application Developer">Application Developer</Select.Option>
                                        </Select>
                                </Form.Item>
                                <Form.Item
                                        name="XP"
                                        label="XP"
                                        tooltip="Experience pointes"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your XP!',
                                
                                        },
                                        ]}
                                    >
                                        <Input value={xp} onChange={onXpChange}/>
                                    </Form.Item>
                                    <Form.Item
                                        name="sal"
                                        label="sal"
                                        tooltip="Salary"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input salary!',
                                
                                        },
                                        ]}
                                    >
                                        <Input value={sal} onChange={onSalChange} addonBefore={'$'}/>
                                    </Form.Item>
                              </Form>
                              <Button onClick={savePro} type="primary" block>Save Profile</Button>
                         </Col>
                    </div>  
                    </Col>
            </Row>
        </div>
    )
}


export default RightSideFormular

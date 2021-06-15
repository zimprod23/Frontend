import React,{useState,useEffect,useContext} from 'react'
import { Col, Row,Input,Form,Button,Typography,Select } from "antd";
import UploadPic from '../Utils/Upload';
import UploadPicture from '../Utils/UploadImage';
import { EmpCtxt } from '../Utils/NewEmpProvider'

const {Title} = Typography;

function RightSideFormular() {

    const {NewPro} = useContext(EmpCtxt)
    const [profileData, setprofileData] = NewPro 
    const [cv, setcv] = useState("");
    const [image, setimage] = useState("")
    const [xp, setxp] = useState("")
    const [domain, setdomain] = useState("")
    useEffect(() => {
    //    console.log("Data from Right")
    //    console.log(cv);
    //    console.log(image);
       setprofileData({
           ...profileData,
           image:image,
           resume:cv,
           xp:xp,
           type:domain
       })
    }, [cv,image])

    const onDomainChange = (e,v) =>{
        setdomain(v.value)
    }
    const onXpChange = (e) => {
        setxp(e.target.value)
    }
   useEffect(() => {
    setprofileData({
        ...profileData,
        xp:xp,
        type:domain
    })
   }, [domain,xp])
    useEffect(() => {
       console.log(profileData)
    }, [profileData])
console.log(profileData)
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
                                    label="Domaine"
                                    tooltip="Your Dev Field?"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Domain!',
                                        },
                                        ]}
                                        >
                                        <Select value={domain} onChange={onDomainChange}>
                                            <Select.Option value="demo">Demo</Select.Option>
                                            <Select.Option value="demo1">Demo</Select.Option>
                                            <Select.Option value="demo2">Demo</Select.Option>
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
                              </Form>
                              <Button onClick={() => alert("Data sent")} type="primary" block>Save Profile</Button>
                         </Col>
                    </div>  
                    </Col>
            </Row>
        </div>
    )
}


export default RightSideFormular

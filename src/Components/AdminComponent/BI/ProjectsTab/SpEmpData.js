import React,{useRef, useState} from 'react'
import styled from 'styled-components';
import { Col, Row,Typography,Input,Spin,Button,Image,Badge } from 'antd';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import { DownloadOutlined } from '@ant-design/icons';
import ProTskPha from './SpeEmp/ProTskPha';
import ProTskType from './SpeEmp/ProTskType';
import ProProjSect from './SpeEmp/ProProjSect';
import ProProjDev from './SpeEmp/ProProjDev';
import ProProjType from './SpeEmp/ProProjType';
import ProXpWeek from './SpeEmp/ProXpWeek';
const { Search } = Input
const {Title} = Typography


function DisplayUserData(props) {
    return(
        <div style={{
            padding:"5px",
            margin:"5px"
        }}>
             <Row>
                 <Col span={7}>
                     <Badge count={props.data.XP} overflowCount={100000}>
                     <Image width={150} src={props.data.image} />
                     </Badge>
                     <br />
                     <Title level={5} style={{color:"#2ed573"}}>{props.data.domaine}</Title>
                 </Col>
                 <Col span={17}>
                     <div>
                         <div>
                            <Title level={5}> {` Full Name : ${props.data.account.first_name} ${props.data.account.last_name}`}</Title>
                         </div>
                         <div>
                            <Title level={5}> Salaire : {props.data.sal}$</Title>
                         </div>
                         <div>
                            <Title level={5}> Email : {props.data.account.email}</Title>
                         </div>
                         <div>
                            <Title level={5}> CIN : {props.data.account.CIN}</Title>
                         </div>
                         <br />
                         <div>
                           {props.data.CV.length > 10? <Button type="primary" icon={<DownloadOutlined />} download href={props.data.CV}>
                               resume
                            </Button>:
                            <Typography.Text type="danger">
                                  Resume does not Exist
                            </Typography.Text>
                        }
                         </div>
                     </div>
                 </Col>
             </Row>
        </div>
    )
}



const InfoWrapper = styled.div`
padding:5px;
display:flex;
margin:5px;
//justify-content:center;
align-items:center;
background-color:  #fff
`

const ResultWrapper = styled.div`
padding:5px;
display:flex;
margin:5px;
justify-content:center;
align-items:center
`
function SpEmpData() {
   const componentRef = useRef()
  const [searchVerv, setsearchVerv] = useState("");
  const [FinalSv, setFinalSv] = useState(null)
  const [searchIndex, setsearchIndex] = useState({
    loading : null,
    isFetched : null
  })

  const LaunchSearch = () => {
    setsearchIndex({
      ...searchIndex,
      loading : true
    })
    axios.get(`http://127.0.0.1:8000/profile/${searchVerv}`).then(res => {
        
            if(res.data){
                setsearchIndex({
                  loading : false,
                  isFetched : true
                })
                setFinalSv(res.data)
                console.log(res.data)
            }else{
              setsearchIndex({
                loading : false,
                isFetched : false
              })
            }
    }).catch(err => {
    
      setsearchIndex({
        loading : false,
        isFetched : false
      })
    })
  }

  const handleSeachChange = (e) => {
    setsearchVerv(e.target.value)
    console.log(searchVerv)
  }
    return (
        <div>
            <div style={{padding:"20px"}}>
                <Row justify="end" style={{marginRight:"50px"}}>
                    <Col span={12}>
                       <Search placeholder="Search Employee"  size={"large"} value={searchVerv} onChange={handleSeachChange} onSearch={LaunchSearch} enterButton />
                    </Col>
                </Row>
            </div>
            {searchIndex.isFetched && FinalSv? <div style={{
                //display:"flex",
                flex: "1",
                flexWrap:"wrap",
                flexBasis:"0",
                justifyContent:"center",
                alignItems:"center"
                //height:"200vh",
                //minWidth:"auto",
            }}
            ref={componentRef}
            >
                {/* <Title level={4}>
                    Search Project
                </Title> */}
                <div>
                     {FinalSv.account && <DisplayUserData data={FinalSv}/>}
                </div>
            {FinalSv.account && FinalSv.account.username && <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div ><ProTskPha username={FinalSv.account.username} /></div>
                 </Col>
                 <Col>
                     <div ><ProTskType username={FinalSv.account.username}/></div>
                 </Col>
                  <Col>
                     <div ><ProProjSect username={FinalSv.account.username}/></div>
                 </Col>
                 <Col>
                 <div ><ProProjDev username={FinalSv.account.username}/></div>
                 </Col>
                 <Col>
                 <div ><ProProjType username={FinalSv.account.username}/></div>
                 </Col>
                 <Col>
                 <div ><ProXpWeek username={FinalSv.account.username}/></div>
                 </Col>
            </Row>}
            </div>:searchIndex.loading?<ResultWrapper><Spin size="large" /></ResultWrapper>:searchVerv.length==0?<ResultWrapper><Title level={4}>Please Enter The Employee username</Title></ResultWrapper>:<ResultWrapper><Title level={4}>No Employee with the given name</Title> </ResultWrapper>    }
           {searchIndex.isFetched && FinalSv && <ReactToPrint
        trigger={() => <Button type="primary" >Print Employee data</Button>}
        content={() => componentRef.current}
      />}
        </div>
    )
}

export default SpEmpData

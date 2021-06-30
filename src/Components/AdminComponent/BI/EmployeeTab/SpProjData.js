import React,{useRef, useState} from 'react'
import styled from 'styled-components';
import { Col, Row,Typography,Input,Spin,Button } from 'antd';
import axios from 'axios';
import ProjByAll1 from './SpeProject/ProjByAll1';
import ProjByAll2 from './SpeProject/ProjByAll2';
import ProjByTitleBurn from './SpeProject/ProjByTitleBurn';
import BestEmployees from './SpeProject/BestEmployees';
import ReactToPrint from 'react-to-print';
const { Search } = Input
const {Title} = Typography

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
function SpProjData() {
   const componentRef = useRef()
  const [searchVerv, setsearchVerv] = useState("");
  const [FinalSv, setFinalSv] = useState(null)
  const [data, setdata] = useState(null)
  const [searchIndex, setsearchIndex] = useState({
    loading : null,
    isFetched : null
  })

  const LaunchSearch = () => {
    setsearchIndex({
      ...searchIndex,
      loading : true
    })
    axios.get(`http://127.0.0.1:8000/project/?archive=True&search=${searchVerv}`).then(res => {
            if(res.data.length > 0){
                setsearchIndex({
                  loading : false,
                  isFetched : true
                })
                setFinalSv(res.data[0].title)
                setdata(res.data[0])
                console.log(res.data[0])
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
                       <Search placeholder="Search Project"  size={"large"} value={searchVerv} onChange={handleSeachChange} onSearch={LaunchSearch} enterButton />
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
              <InfoWrapper>
              <div>
                            <Title level={4}>{data&& data.title}</Title>
                            <div className="Text-Desc" style={{marginTop:"1vh",display:"flex"}}>
                                {/* <div style={{
                                    margin:"5px"
                                }}>
                                   <Text italic>
                                    { data && project.spProj.desc }
                                  </Text>
                                </div> */}
                                <br />
                                <div>
                                <Title level={5}>
                                &#9733; done tasks : { data && data.count_Done_tasks }
                                </Title>
                                <br />
                                <Title level={5}>
                                &#9733; cancelled tasks : { data && data.count_Canceled_tasks }
                                </Title>
                                </div>
                                {/* <br /> */}
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <div>
                                <Title level={5}>
                                &#9733; admin :  { data && data.admin.username }
                                </Title>
                                <br />
                                <Title level={5}>
                                &#9733; start date : { data && data.start_date } || deadline : { data && data.date_limit }
                                </Title>
                                </div>
                            </div>
                            {/* <div style={{padding:"5vh",}}>
                                  <RenderAvaGroup proj={project.spProj && project.spProj}/> 
                            </div> */}
                        </div>
              </InfoWrapper>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div ><ProjByAll1 project={FinalSv} /></div>
                 </Col>
                 <Col>
                     <div ><ProjByAll2 project={FinalSv}/></div>
                 </Col>
                 <Col>
                     <div ><ProjByTitleBurn project={FinalSv}/></div>
                 </Col>
                 <Col>
                     <div >< BestEmployees project={FinalSv}/></div>
                 </Col>
            </Row>
            </div>:searchIndex.loading?<ResultWrapper><Spin size="large" /></ResultWrapper>:searchVerv.length==0?<ResultWrapper><Title level={4}>Please Enter The project name</Title></ResultWrapper>:<ResultWrapper><Title level={4}>No project with the given name</Title> </ResultWrapper>    }
           {searchIndex.isFetched && FinalSv && <ReactToPrint
        trigger={() => <Button type="primary" >Print project</Button>}
        content={() => componentRef.current}
      />}
        </div>
    )
}

export default SpProjData

import React,{useState} from 'react'
import styled from 'styled-components';
import { Col, Row,Typography,Input,Spin } from 'antd';
import axios from 'axios';
import ProjByAll1 from './SpeProject/ProjByAll1';
import ProjByAll2 from './SpeProject/ProjByAll2';
import ProjByTitleBurn from './SpeProject/ProjByTitleBurn';
import BestEmployees from './SpeProject/BestEmployees';
const { Search } = Input
const {Title} = Typography


const ResultWrapper = styled.div`
padding:5px;
display:flex;
margin:5px;
justify-content:center;
align-items:center
`
function SpProjData() {

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
    axios.get(`http://127.0.0.1:8000/project/?archive=True&search=${searchVerv}`).then(res => {
            if(res.data.length > 0){
                setsearchIndex({
                  loading : false,
                  isFetched : true
                })
                setFinalSv(res.data[0].title)
              //  console.log(res.data[0].title)
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
                       <Search placeholder="input search text"  size={"large"} value={searchVerv} onChange={handleSeachChange} onSearch={LaunchSearch} enterButton />
                    </Col>
                </Row>
            </div>
            {searchIndex.isFetched && FinalSv? <div style={{
                //display:"flex",
                flex: "1",
                flexWrap:"wrap",
                flexBasis:"0",
                //height:"200vh",
                //minWidth:"auto",
            }}>
                {/* <Title level={4}>
                    Search Project
                </Title> */}
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
        </div>
    )
}

export default SpProjData

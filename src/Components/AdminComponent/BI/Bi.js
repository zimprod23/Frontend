import { BookOutlined, ProjectOutlined,GroupOutlined } from '@ant-design/icons';
import { Button, Row, Tabs ,Divider} from 'antd';
import React,{useRef} from 'react';
import styled from 'styled-components'
import ProjTab from './EmployeeTab/PrjT';
import SpProjData from './EmployeeTab/SpProjData';
import EmpTab from './ProjectsTab/EmpT';
import ReactToPrint from 'react-to-print';
import SpEmpData from './ProjectsTab/SpEmpData';


const { TabPane } = Tabs;

//Costumizing componenet

const MainContainer = styled.div`
padding : 10px;
margin: 10px;
display: flex;
flex-wrap: wrap;   
`;
const ProjContainer = styled.div`
flex : 1;
flex-wrap: wrap;   
flex-basis: 0;
overflow-y: auto;
`;

function TabCont(){
  const componentRef = useRef();

    return(
    <Tabs defaultActiveKey="1" size="large">
    <TabPane
      key="1"
      tab={
        <span>
          <ProjectOutlined /> Projects
        </span>
      }
    >
      <div>
        {/* <Row justify="space-around" style={{height:"85vh"}}> */}
        <ProjContainer>
        <div id="general" 
        ref={componentRef}>
          <ProjTab />
        </div>
        {/* <ReactToPrint
        trigger={() => <Button type="primary" >Print General</Button>}
        content={() => componentRef.current}
      /> */}
      </ProjContainer>
        {/* </Row> */}
        <br />
        <ProjContainer>
          <Divider orientation="right">Search A project</Divider>
          <div>
            <SpProjData />
          </div>
          </ProjContainer>
      </div>
      {/* {newsStatus && RenderSpin()}
      {LoadMoreButton(handleClick)} */}
    </TabPane>
    <TabPane
      key="2"
      tab={
        <span>
          <GroupOutlined /> Employee
        </span>
      }
    >
      <div>
        {/* <Row gutter={[16, 16]}> */}
          <ProjContainer>
          <EmpTab />
          </ProjContainer>
        {/* </Row> */}
        <br />
        <ProjContainer>
          <Divider orientation="right">Search An Employee</Divider>
          <div>
            <SpEmpData />
          </div>
          </ProjContainer>
      </div>
    </TabPane>
  </Tabs>
)
    }

function Bi() {
    return (
        // <MainContainer>
            <TabCont />
        // </MainContainer>
    )
}

export default Bi

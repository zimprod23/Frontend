import { BookOutlined, FireOutlined } from '@ant-design/icons';
import { Affix, Row, Tabs ,Divider} from 'antd';
import React from 'react';
import styled from 'styled-components'
import ProjTab from './EmployeeTab/PrjT';
import SpProjData from './EmployeeTab/SpProjData';
import EmpTab from './ProjectsTab/EmpT';

const { TabPane } = Tabs;

//Costumizing componenet

const MainContainer = styled.div`
padding : 10px;
margin: 10px;
display: flex;
flex-wrap: wrap;
height: 98vh;     
`;

function TabCont(){
    return(
    <Tabs defaultActiveKey="1" size="large">
    <TabPane
      key="1"
      tab={
        <span>
          <FireOutlined /> Projects
        </span>
      }
    >
      <div style={{padding:"10px",width:"100vw"}}>
        <Row justify="space-around" style={{height:"85vh"}}>
            <ProjTab />
        </Row>
        <Divider orientation="right">Search A project</Divider>
         <div>
           <SpProjData />
         </div>
      </div>
      {/* {newsStatus && RenderSpin()}
      {LoadMoreButton(handleClick)} */}
    </TabPane>
    <TabPane
      key="2"
      tab={
        <span>
          <BookOutlined /> Employee
        </span>
      }
    >
      {/* <div
        style={{
          padding: "15px",
          margin: "10px auto",
          textAlign: "right",
          maxWidth: "700px",
        }}
      >
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          value={SearchValue}
          onSearch={handleSearch}
          onChange={handleSearchChange}
        /> 
      </div> */}
      <div>
        <Row gutter={[16, 16]}>{<EmpTab />}</Row>
      </div>

      {/* {newsStatus && RenderSpin()}
      {LoadMoreButton(handleClick2)} */}
    </TabPane>
  </Tabs>
)
    }

function Bi() {
    return (
        <MainContainer>
            <TabCont />
        </MainContainer>
    )
}

export default Bi

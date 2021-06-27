import { BookOutlined, FireOutlined } from '@ant-design/icons';
import { Button, Row, Tabs ,Divider} from 'antd';
import React,{useRef} from 'react';
import styled from 'styled-components'
import ProjTab from './EmployeeTab/PrjT';
import SpProjData from './EmployeeTab/SpProjData';
import EmpTab from './ProjectsTab/EmpT';
import ReactToPrint from 'react-to-print';


const { TabPane } = Tabs;

//Costumizing componenet

const MainContainer = styled.div`
padding : 10px;
margin: 10px;
display: flex;
flex-wrap: wrap;   
`;

function TabCont(){
  const componentRef = useRef();
  const generalClickEvent = () => {
    
      // var content = window.document.getElementById("general");
      // var pri = window.document.getElementById("general").contentWindow;
      // pri.document.open();
      // pri.document.write(content.innerHTML);
      // pri.document.close();
      // pri.focus();
      // pri.print();
  }

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
        {/* <Row justify="space-around" style={{height:"85vh"}}> */}
        <div id="general" 
        ref={componentRef}
        style={{
       //   backgroundColor:"red",
          // display:"flex",
          // flexWrap:"wrap",
          // padding:"10px",
          minHeight:"150vh"   
        }}>
          <ProjTab />
        </div>
        <ReactToPrint
        trigger={() => <Button type="primary" >Print General</Button>}
        content={() => componentRef.current}
      />
        {/* </Row> */}
          <Divider orientation="right">Search A project</Divider>
          {/* <div>
            <SpProjData />
          </div> */}
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

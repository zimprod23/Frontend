import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Col, Collapse, Row } from 'antd'
import Search from 'antd/lib/input/Search'
import React, {useState} from 'react'
import ProjectCard from '../Utils/ProjectCard';

const {Panel} = Collapse;

function Filter() {

    const [expandIconPosition, setexpandIconPosition] = useState("left")

//  const  onPositionChange = expandIconPosition => {
//         setexpandIconPosition(() => expandIconPosition)
//       };

    function callback(key) {
        console.log(key);
      }
      const genExtra = () => (
        <SettingOutlined
          onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
          }}
        />
      );      
const text = "Blah blah blah"
    return(

        <>
             <Collapse
                onChange={callback}
                // expandIconPosition={expandIconPosition}
        >
          <Panel header="Filter" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
        </>
    );
}

function EmployesCRUD() {
    return (
        <div className={"EmployeCRUD"}>
            <div>
                <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                            Ass New Employee
                </Button>
            </div>
            <div>
                <Row>
                    <Col span={12}>
                       <Search placeholder="input search text"  size={"large"} onSearch={() => alert("YAbhsa")} enterButton /></Col>
                    <Col span={12}>
                       <Filter />
                    </Col>
                </Row>
               
               
            </div>
            <div>
               <ProjectCard />
            </div>
        </div>
    )
}
 
export default EmployesCRUD

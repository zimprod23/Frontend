import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Col, Collapse, Row,Skeleton } from 'antd'
import Search from 'antd/lib/input/Search'
import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getallProjects,getSearchedProjects } from '../../../actions/projectAction'
//import EmployeCard from '../Utils/EmployeCard';
import ProjectCard from '../Utils/ProjectCard';
import RenderSkeleton from '../Utils/RenderSkeleton'

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

function ProjectCRUD(props) {
  const dispatch = useDispatch();
  const  proj= useSelector(state => state.project);
  const [sverb, setsverb] = useState("");
  const OnsearchChange = (e) => {
    setsverb(e.target.value);
  }
  useEffect(() => {
     dispatch(getallProjects())
  }, [])
  useEffect(() => {
    if(sverb.length > 0)
    dispatch(getSearchedProjects(sverb))
  }, [sverb])
    return (
      <>
        <div className={"EmployeCRUD"}>
            <div>
                <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                            Add New Project
                </Button>
            </div>
            <div>
                <Row justify="space-between"  gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
                    <Col span={12}>
                       <Search placeholder="input search text"  size={"large"} onSearch={() => console.log("pp")} enterButton value={sverb} onChange={OnsearchChange}/></Col>
                    <Col span={12}>
                       <Filter />
                    </Col>
                </Row>
            </div>
            <div>
            <div style={{padding:"10px",margin:"10px"}}> 
            <Row justify="center"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                  sverb.length==0?
                   proj.allProjs && proj.allProjs.length > 0 ? proj.allProjs.map((item,index) => {
                       return(
                         <>
                             <Col>
                                <ProjectCard key={index} projectInfos={item} loadingState={proj.isLoading}/>
                             </Col> 
                           </>          
                        )
                   }):<Skeleton active />:proj.spProj && proj.spProj.length > 0?(proj.spProj && proj.spProj.map((item,index) => {
                    return (
                      <>
                          <Col>
                               <ProjectCard key={index} projectInfos={item} loadingState={proj.isLoading}/>
                            </Col> 
                      </>
                    )
                  })):<Skeleton active/>
              }
              </Row>
               </div>
            </div>
        </div>
        </>
    )
}
 
export default ProjectCRUD

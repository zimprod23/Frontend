import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React,{useEffect} from 'react'
import ProjectCard from '../Utils/ProjectCard'
import { useDispatch,useSelector } from 'react-redux';
import { getTopHeadlineProjects } from '../../../actions/projectAction'

let x = [1,2,3]

function Projects(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopHeadlineProjects());
    console.log("Test")
  }, [])
  const proj = useSelector(state => state.project);
    return (
        <>
             <div className="Project-wrapper_1">
             <Button type="primary" shape="round" icon={<PlusOutlined />} size={"large"} >
                        Create New Project
                </Button>
             </div>
        <div className="Project-wrapper">
            <div>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                
                {proj.headlineProjs && proj.headlineProjs.map((item,index) => {
                    return (
                      <Col>
                        {console.log(item)}
                        <ProjectCard key={index} projectInfos={item} loadingState={proj.isLoading}/>
                      </Col>
                    )
                })}
          </Row>
            </div>

        </div>
        </>
    )
}

export default Projects

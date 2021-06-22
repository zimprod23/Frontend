import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Col, Collapse, Row,Skeleton,Radio,Space,Checkbox,Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getallProjects,getSearchedProjects } from '../../../actions/projectAction'
//import EmployeCard from '../Utils/EmployeCard';
import ProjectCard from '../Utils/ProjectCard';
import RenderSkeleton from '../Utils/RenderSkeleton'
import {Link} from 'react-router-dom'

const {Panel} = Collapse;
const {Title} = Typography

function Filter(props) {


  function OrganizeVars(fetchedD2){
    const type = `${fetchedD2 && fetchedD2.choices && fetchedD2.choices.includes("type") && fetchedD2.data.type?`type=${fetchedD2.data.type}&`:``}`
    const secteur = `${fetchedD2 && fetchedD2.choices && fetchedD2.choices.includes("secteur") && fetchedD2.data.secteur?`secteur=${fetchedD2.data.secteur}&`:``}`
    const Device = `${fetchedD2 && fetchedD2.choices && fetchedD2.choices.includes("Device") && fetchedD2.data.Device?`Device=${fetchedD2.data.Device}&`:``}`
    const orderBy = `${fetchedD2 && fetchedD2.choices && fetchedD2.choices.includes("orderby")?`order-by=budget&`:``}`
    return type+secteur+Device+orderBy;
  }

  const [existingChoices, setexistingChoices] = useState()

  const [enability, setenability] = useState({
    archieve:false,
    "order-by":false,
    Device:false,
    secteur:false,
    type:false
  })

  const [OtherOps, setOtherOps] = useState({
    archieve:false,
    orderby:null,
    Device:null,
    secteur:null,
    type:null
  })

  const TypeChoices = (
    <Radio.Group onChange={(e,v) => setOtherOps({...OtherOps,type:e.target.value})} disabled={!(existingChoices?existingChoices.includes("type"):false)}>
    <Space direction="Horizontal">
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col><Radio value={"I"}>Interne</Radio></Col>
      <Col><Radio value={"E"}>Externe</Radio></Col>
      <Col><Radio value={"Ed"}>Educatif</Radio></Col>
     <Col> <Radio value={"Ot"}>Other</Radio></Col>
      </Row>
    </Space>
  </Radio.Group>
  )


  const SectChoices = (
    <Radio.Group onChange={(e,v) => setOtherOps({...OtherOps,secteur:e.target.value})} disabled={!(existingChoices?existingChoices.includes("secteur"):false)}>
    <Space direction="Horizontal">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col><Radio value="RS">reseausociale</Radio></Col>
        <Col><Radio value="Blog">Bolg</Radio></Col>
        <Col><Radio value="E-com">e-commerce</Radio></Col>
        <Col><Radio  value="VG">Video-games</Radio></Col>
        <Col><Radio value="AI">Artificial intelligence</Radio></Col>
        <Col><Radio value="onS">online-services</Radio></Col>
        <Col><Radio  value="dig">digitalisation</Radio></Col>
        <Col><Radio value="Ot">other</Radio></Col>
      </Row>
    </Space>
  </Radio.Group>
  )

  const DevChoices = (
    <Radio.Group onChange={(e,v) => setOtherOps({...OtherOps,Device:e.target.value})} disabled={!(existingChoices?existingChoices.includes("Device"):false)}>
    <Space direction="Horizontal">
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col>  <Radio value="Mo">Mobile</Radio></Col>
      <Col><Radio value="Web">Web</Radio></Col>
      <Col><Radio value="De">desktop</Radio></Col>
      <Col><Radio  value="Se">serveur</Radio></Col>
      <Col><Radio value="Em">Embedded system</Radio></Col>
      <Col><Radio value="Ot">other</Radio></Col>
      </Row>
    </Space>
  </Radio.Group>
  )


const ChoicesAvailability = (
  <Checkbox.Group style={{ width: '100%' }} onChange={(el,v) => {
     setexistingChoices(el);
  }}>
    <Row>
      <Col span={24}>
        <Checkbox value="type">{TypeChoices}</Checkbox>
      </Col>
      <Col span={24}>
        <Checkbox value="Device">{DevChoices}</Checkbox>
      </Col>
      <Col span={24}>
        <Checkbox value="secteur">{SectChoices}</Checkbox>
      </Col>
      <Col span={24}>
        <Checkbox value="archieve">archieve</Checkbox>
      </Col>
      <Col span={24}>
        <Checkbox value="orderby">Order By budget</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
)


useEffect(() => {
 const dd = {choices : existingChoices,data : OtherOps}
  props.IntegrateFirstFilter({link : OrganizeVars(dd)})
  props.Archieve(existingChoices)
}, [existingChoices,OtherOps])

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

    return(

        <>
             <Collapse
                onChange={callback}
                // expandIconPosition={expandIconPosition}
        >
          <Panel header="Filter" key="1" extra={genExtra()}>
            {ChoicesAvailability}
          </Panel>
        </Collapse>
        </>
    );
}

function ProjectCRUD(props) {
  const dispatch = useDispatch();
  var fet = null
  const  proj= useSelector(state => state.project);
  const auth = useSelector(state => state.auth)
  const [fetchedD2, setfetchedD2] = useState(null);
  const [sverb, setsverb] = useState("");
  const [archieve, setarchieve] = useState(false);
  const OnsearchChange = (e) => {
    setsverb(e.target.value);
  }
  useEffect(() => {
     dispatch(getallProjects())
  }, [])
  useEffect(() => {
    console.log(fetchedD2)
  }, [fetchedD2])

  useEffect(() => {
    dispatch(getSearchedProjects(sverb,archieve,fetchedD2))
  }, [fetchedD2])
  
  useEffect(() => {
    dispatch(getSearchedProjects(sverb,archieve,fetchedD2))
  }, [sverb,fetchedD2])

  return (
      <>
        <div className={"EmployeCRUD"}>
            <div>
              <Link to={'/admin/project/add_Project'}>
                  <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                                Add New Project
                    </Button>
              </Link>
            </div>
            <div>
                <Row justify={"space-around"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                 style={{
                   padding:"5px",
                   }}>
                     <Col>
                       <div style={{
                         backgroundColor:"yellow",
                         margin:"4px",
                         width:"42vw"
                       }}> 
                              <Search placeholder="input search text"  size={"large"} onSearch={() => console.log("Search")} enterButton value={sverb} onChange={OnsearchChange}/>
                       </div>
                     </Col>
                     <Col>
                        <div style={{
                          backgroundColor:"violet",
                          margin:"4px",
                          width:"42vw"
                        }}>
                         <Filter IntegrateFirstFilter={(val) => setfetchedD2(val)} Archieve={(val) => setarchieve(val && val.includes("archieve")?true:false)}/>
                        </div>
                     </Col>
                </Row>
            </div>
            <div>
            <div style={{padding:"10px",margin:"10px"}}> 
            <Row justify="center"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                //  
                sverb === '' && fetchedD2 == null && fetchedD2 && fetchedD2.link ==""/*|| proj.spProj && typeof proj.spProj === 'string' || proj.spProj && typeof proj.spProj !== 'string' && proj.spProj.length == 0*/?
                 proj.allProjs && proj.allProjs.length > 0 ? proj.allProjs.map((item,index) => {
                       return(
                         <>
                             <Col>
                               {auth.user && <ProjectCard key={index} projectInfos={item} loadingState={proj.isLoading} isAccessible={item.admin.id != auth.user.id}/>}
                             </Col> 
                           </>          
                        )
                   }):<Skeleton avatar paragraph={{ rows: 4 }} />:
                    proj.spProj && typeof proj.spProj !== 'string' && proj.spProj.length > 0?(proj.spProj && proj.spProj.map((item,index) => {
                    return (
                      <>
                          <Col>
                              {auth.user && <ProjectCard key={index} projectInfos={item} loadingState={proj.isLoading} isAccessible={item.admin.id != auth.user.id}/>}
                            </Col> 
                      </>
                    )
                  })):proj.spProj && typeof proj.spProj === 'string' || proj.spProj && proj.spProj.length == 0?<Title level={3}>No Project Found ...</Title>:<Skeleton active/>
                  }

              </Row>
               </div>
            </div>
        </div>
        </>
    )
}
 
export default ProjectCRUD
/*

 <Col offset={3} >
                      <div style={{
                      backgroundColor:"blue",
                    }}>
                      <Search placeholder="input search text"  size={"large"} onSearch={() => console.log("Search")} enterButton value={sverb} onChange={OnsearchChange}/>
                      </div>
                     </Col> 
                    <Col offset={5}>
                      <div style={{
                      backgroundColor:"blue",
                      padding:"10px",
                      width:"35vw"
                    }}>
                      <Filter />
                      </div>
                    </Col>

*/
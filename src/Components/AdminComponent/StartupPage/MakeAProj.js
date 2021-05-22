import React from 'react'
import { DownloadOutlined,PlusOutlined } from "@ant-design/icons";
import { Button } from 'antd'
import AdminBackground from '../../../Images/AdminBackground.jpg';
import Projects from '../ProjectsPage/Projects';

function MakeAProj() {
    return (
        <div className="Welcome-page">
            <img src={AdminBackground} alt={"background"}/>
            <div>
               <Button type="primary" shape="round" icon={<PlusOutlined />} size={"large"} block>
                  Create New Project
               </Button>
            </div>
        </div>
    )
}

export default MakeAProj

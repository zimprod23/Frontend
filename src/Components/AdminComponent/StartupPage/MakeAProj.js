import React from 'react'
import { DownloadOutlined,PlusOutlined } from "@ant-design/icons";
import { Button } from 'antd'

function MakeAProj() {
    return (
        <div className="Welcome-page">
            <div>
               <Button type="primary" shape="round" icon={<PlusOutlined />} size={"large"} block>
                  Create New Project
               </Button>
            </div>
        </div>
    )
}

export default MakeAProj

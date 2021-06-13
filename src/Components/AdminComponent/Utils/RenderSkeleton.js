import React from 'react'
import { Skeleton,Card,Avatar } from 'antd'
import { SettingOutlined,EditOutlined,EllipsisOutlined } from '@ant-design/icons'

const { Meta } = Card
function RenderSkeleton() {
    
    return (
        <div>
             <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton loading={true} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Loading"
              description="..."
            />
          </Skeleton>
        </Card>
        </div>
    )
}

export default RenderSkeleton

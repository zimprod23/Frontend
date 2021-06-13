import React from 'react'
import { Card,Avatar } from 'antd'

const { Meta } = Card

function ProjectCardWrapper(props) {
    return (
         <>
        <Card style={{ width: "85vw", marginTop: 16 }} loading={false}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Project title"
            description= {props.children}
          />
        </Card>
         </>
    )
}

export default ProjectCardWrapper

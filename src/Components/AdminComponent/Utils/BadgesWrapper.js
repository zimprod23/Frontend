import React from 'react'
import { Card } from 'antd';

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

function BadgesWrapper(props) {
    return (
        <div>
            <Card title="Badges" /*style={{width:"30vw"}}*/>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
        </div>
    )
}

export default BadgesWrapper

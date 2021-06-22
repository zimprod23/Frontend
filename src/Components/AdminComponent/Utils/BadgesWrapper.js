import React from 'react'
import { Card } from 'antd';
import {badges} from '../../../data/badges'

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

function BadgesWrapper(props) {
  console.log(badges)
    return (
        <div>
            <Card title="Badges" /*style={{width:"30vw"}}*/>
                  {badges.map((e,i) => {
                    return(
                          <Card.Grid style={gridStyle}>
                            <div>
                            <img alt={e.name} src={e.image} width={'80vw'}/> 
                            </div>
                          </Card.Grid>
                    )
                  })}
            </Card>
        </div>
    )
}

export default BadgesWrapper

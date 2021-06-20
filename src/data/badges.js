// import React from 'react'
// import { Row,Col } from 'antd'

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../Images/Badges', false, /\.(png|jpe?g|svg)$/));
export const badges = images.map((e,i) => {
    return {
        id:i,
        name:"a"+i,
        image:e.default
    }
})

/*
export default function Test(){
    console.log(images)
    return(
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
           {
               images.map((e,i) => {
                  return(
                      <Col>
                         <img src={e.default} />
                      </Col>
                  )
               })
           }
        </Row>
    )
}
*/
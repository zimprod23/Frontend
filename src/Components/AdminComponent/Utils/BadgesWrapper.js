import React,{useState,useEffect} from 'react'
import { Card,Image } from 'antd';
import {badges, testBadges} from '../../../data/badges'

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

const get_Image = (obj) => {
  badges.map((e,i) => {
      obj.map((ele,ind) => {
        if(e.name == ele.image){
           ele.realImage = e.image
        }
      })
  })
}

function BadgesWrapper(props) {
  const [empBages, setempBages] = useState(null)
  let empBage = []

  useEffect(() => {
    if(props.emp){
        empBage = Object.entries(props.emp.achievment).map((e,i) => {
          return{
               index : i,
               image : e[1]?e[0]+'T':e[0]+'F',
          }
        })
        //setempBages(empBage)
       // console.log(badges)
    }
  }, [props.emp])

  useEffect(() => {
    if(empBage.length > 0){
     // console.log(empBages)
     get_Image(empBage)
     setempBages(empBage)
    }
  }, [empBage])

    return (
        <div>
            <Card title="Badges" /*style={{width:"30vw"}}*/>
                  {empBages && empBages.length > 0 && empBages.map((e,i) => {
                    return(
                          <Card.Grid style={gridStyle}>
                            <div>
                            <img alt={e.image} src={e.realImage} width={'80vw'}/> 
                            </div>
                          </Card.Grid>
                    )
                  })}
            </Card>
            {/* {empBages && empBages.map((e,i) => (
              <>
              <img src={e.image} alt={e.image}/>
              </>
            ))} */}
        </div>
    )
}

export default BadgesWrapper

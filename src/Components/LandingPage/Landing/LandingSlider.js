import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { SliderData } from '../../../data/SliderData'

function LandingSlider(props) {
    //const [images, setimages] = useState(null);
    
    const newImages = SliderData.map((item,index) => {
        return {
                original : item.image,
                thumbnail: item.image,
                description: item.title,
                originalClass : 'Slider-Image'
        }
    })
console.log("Heyyyyy")
    useEffect(() => {
        console.log(newImages)
    }, [newImages])
    return (
        <div>
             {newImages && <Slider images={newImages}/>} 
        </div>
    )
}

export default LandingSlider

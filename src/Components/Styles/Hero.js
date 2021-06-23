import React, {useState,useRef, useEffect} from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowBack,IoArrowForward } from "react-icons/io5";
import styled, {css} from "styled-components/macro";
import { Button } from './Button';


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
`;

const ArrowButtons = css`
 height: 50px;
 width: 50px;
 color: #fff;
 cursor: pointer;
 background: #000d1a;
 border-radius: 50px;
 padding: 10px;
 margin-right: 1rem;
 user-select: none;
 transition: 0.3s;
 &:hover{
     background: #cd853f;
     transform: scale(1.05);
 } 
`;

const SliderButton = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10
`

const PreviousArrow = styled(IoArrowBack)`
${ArrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
${ArrowButtons}
`;
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;

`;
const HeroImage = styled.img`
 position: absolute;
 top:0;
 left:0;
 width:100vw;
 height:100vh;
 object-fit: cover
`;
const HeroContent = styled.div`
position : relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color : #fff;

h1{
    color: #fff !important;
    font-size: clamp(1rem,8vw,2rem);
    font-weight: 400;
    text-transform: uppercase; 
    text-shadow: 0 0 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}
p{
    margin-bottom: 1.2rem;
    text-shadow: 0 0 20px rgba(0,0,0,0.4);

}
`;
const HeroSlider = styled.div`
position: absolute;
top: 0;
left:0;
width:100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
&::before{
    content: '';
    position: absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity: 0.4;
    background: linear.gradient(0deg,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)
}
`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

function Hero(props) {

    //Implementing Slider ::
    const [current, setcurrent] = useState(0);
    const length = props.Slides.length;
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
           setcurrent(current === length -1 ? 0 : current + 1)
       }
       timeout.current = setTimeout(nextSlide,3000)
       return function(){
           if(timeout.current){
               clearTimeout(timeout.current)
           }
       }       
   }, [current,length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setcurrent(current === length -1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setcurrent(current === 0 ? length - 1: current - 1)
    }


    //if(Array.isArray(props.Slides) || props.Slides.length <= 0) return null

    return (
        <HeroSection>
            <HeroWrapper>
           {props.Slides.map((item,index) => (
                <>
                   <HeroSlide key={index} >
                      {index === current && ( 
                          <HeroSlider style={{
                            transitionDuration: '0.5s'
                         }}>
                          <HeroImage src={item.image} alt={item.alt} />
                          <HeroContent>
                          <h1>{item.title}</h1>
                          <Button to={'#'} primary={true} css={`max-width: 160px;display: flex;flex-direction:row;padding:10px !important;`}>
                          <p>{item.label}</p> 
                          <Arrow />   
                          </Button>
                          </HeroContent>
                    </HeroSlider>
                      )} 
                   </HeroSlide>
                </>
            ))}
            <SliderButton>
                {/* <PreviousArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/> */}
            </SliderButton>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero

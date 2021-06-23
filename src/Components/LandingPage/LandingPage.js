import React,{useState,useEffect} from 'react';
import Infos from './Infos';
import { InfoData } from '../../data/InfoSection'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import DropDownMenu from '../Styles/DropDownMenu';
import Hero from '../Styles/Hero';
import { SliderData } from "../../data/SliderData";
import GlobalStyle from '../Styles/GlobalStyle';
import LandingSlider from './Landing/LandingSlider';
import Contact from './Contact';

function LandingComp(){
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  }

  return(
      <>
         <GlobalStyle />
            <Navbar toogle={toogle} />
            <DropDownMenu isopen={isOpen} toogle={toogle}/>
            <LandingSlider data={InfoData}/>
            {/* <Hero Slides={SliderData}/>
         */}
         <div>
            {InfoData.map((item,index) => (
                 <Infos info={item} key = {index}/> 
            ))}     
        </div>
        <Contact />
      </>
  );
}

function LandingPage(props) {

    return (
        <Route exact path="/" component={LandingComp}/>
    );
}

export default LandingPage;


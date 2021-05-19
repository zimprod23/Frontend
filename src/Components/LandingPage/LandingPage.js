import React,{useState} from 'react';
import Infos from './Infos';
import { InfoData } from '../../data/InfoSection'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import DropDownMenu from '../Styles/DropDownMenu';
import Hero from '../Styles/Hero';
import { SliderData } from "../../data/SliderData";
import GlobalStyle from '../Styles/GlobalStyle';

function LandingPage(props) {

const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  }

    return (
        <Route>
            <GlobalStyle />
            <Navbar toogle={toogle}/>
            <DropDownMenu isopen={isOpen} toogle={toogle}/>
            <Hero Slides={SliderData}/>
            <div>
            {InfoData.map((item,index) => (
                 <Infos info={item} key = {index}/> 
            ))}     
        </div>
        </Route>
    );
}

export default LandingPage;


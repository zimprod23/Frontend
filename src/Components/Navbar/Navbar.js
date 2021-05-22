import React from 'react'
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { MenuData } from '../../data/MenuData';
import { Button } from '../Styles/Button';
import Bars from "../../Images/bars.svg";
import { FaBars }  from 'react-icons/fa'


const Nav = styled.nav`
height : 60px;
display : flex;
justify-content: space-between;
padding : 1rem 2rem;
z-index : 100;
position : fixed;
width : 100%;
`;


const NavLink = css`
color : #fff;
display : flex;
align-items : center;
padding : 0 1rem;
height : 100%;
cursor : pointer;
text-decoration : none;
`;

const Logo = styled(Link)`
${NavLink}
 color : #fff;
 font : italic;
 font-size:18px;
`;

const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width : 768px){
    display : block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 20;
    right: 0;
    transform : translate(-50%,-35%)
};
`;

const NavMenu = styled.div`
display : flex;
align-items : center;
margin-right : -48px

@media screen and (max-width : 768px){
    display : none
}
`;

const NavBtn = styled.div`
display : flex;
align-items : center;
margin-right : 24px;
@media screen and (max-width : 768px){
    display : none
}
`;


const NavMenuLinks = styled(Link)`
${NavLink}
color : #fff;
@media screen and (max-width : 768px){
    display : none
}
`;

function Navbar(props) {
    return (
        <Nav>
           <Logo to={'/'}>Projecy</Logo>
           <MenuBars onClick={props.toogle}/>
           <NavMenu>
               {MenuData.map((item,index) => (
                  
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>                     
            ))}
           </NavMenu>
           <NavBtn>
               <Button to={'/Login'} primary={true}>Login</Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar

import React from 'react'
import { Button } from '../Styles/Button'
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
height: 100%;
padding:4rem 0rem;

`;
const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width : 768px){
    rid-template-columns: 1fr;
}
`;
const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')}
h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem,6vw,2rem);
}
p{
    margin-bottom: 2rem;
}
`;
const ColumnRight = styled.div`
padding : 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')}
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width : 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')}
}
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width : 768px){
        height: 90%;
        width: 90%;
    }
}
`;

function Infos(props) {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{props.info.heading}</h1>
                    <h1>{props.info.para1}</h1>
                    <h1>{props.info.para2}</h1>
                    <Button to={'/'}> {props.info.buttonLabels} </Button>
                </ColumnLeft>
                <ColumnRight reverse={props.info.reverse}>
                     <img src={props.info.image} alt={'dsa'} />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Infos


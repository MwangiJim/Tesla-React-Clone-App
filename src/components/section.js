import React from 'react';
import styled from 'styled-components';
import { Fade} from 'react-reveal';

function Section(props) {
  return(
    <Wrap bgImg={props.backgroundImg}>
     <Fade bottom>
        <Itemtext>
            <h1>{props.model}</h1>
            <p>{props.description}</p>
        </Itemtext>
        </Fade>

        <Buttons>
        <Fade bottom>
           <RightButton>
               {props.leftButtonText}
           </RightButton>
          {RightButton? <LeftButton>
               {props.rightButtonText}
           </LeftButton>:''}
           </Fade>
        </Buttons>
        <img src='/Images/down-arrow.svg' className='Arrow'/>
    </Wrap>
  )
}

export default Section;

let Wrap = styled.div`
  width:100%;
  height:100vh;
  background-image: url('/Images/model-s.jpg');
  background-position:center;
  background-size:cover;
  overflow:hidden;
  background-image:${props => `url(${props.bgImg})`}
`
let Itemtext = styled.div`
   text-align:center;
   padding:15vh;
`

let Buttons = styled.div`
  bottom:-46%;
  left:5%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  @media(max-width:768px){
    flex-direction:column;
    top:200px;
    position:relative;
   }
`
let RightButton = styled.div`
   width:256px;
   height:40px;
   border-radius:100px;
   color:#fff;
   background-color:#333;
   text-align:center;
   padding:10px 0 ;
   margin:0 15px;
   text-transform:uppercase;
   cursor:pointer;
   font-size:12px;
   @media(max-width:768px){
     margin:15px 0;
   }
`
let LeftButton = styled.div`
width:256px;
height:40px;
border-radius:100px;
color:#000;
background-color:#fff;
margin:0 15px;
text-align:center;
padding:10px 0 ;
cursor:pointer;
text-transform:uppercase;
font-size:12px;
`
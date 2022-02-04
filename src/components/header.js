import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'
import {selectCars} from "../features/Car/CarSlice"
import { useSelector } from 'react-redux'



function Header(){
  let [Menu,setMenu] = React.useState();
  const cars = useSelector(selectCars)
  console.log(cars)
  let menuShowStyles = {
     right:Menu?'0px':''
  }

  function ShowMenu(){
     setMenu(prevState => !prevState)
  }
  function HideMenu(){
     setMenu(prevState =>!prevState)
  }
    return(
            <Head>
                <a href=''>
                <img src='/Images/logo.svg' className='Logo'/>
                </a>
                   <ul className='Navbar'>
                     {cars && cars.map((car,index)=>{
                        <li><a key = {index} href=''>{car}</a></li>
                     })}
                       <li><a href=''>Model S</a></li>
                       <li><a href=''>Model 3</a></li>
                       <li><a href=''>Model X</a></li>
                       <li><a href=''>Model Y</a></li>
                   </ul>
                  <RightMenu>
                       <li><a href=''>Shop</a></li>
                       <li><a href=''>Telsa Account</a></li>
                       <FontAwesomeIcon icon = {faBars} className='MenuBar' onClick={ShowMenu}/>
                  </RightMenu>
                  <BurgerNav style={menuShowStyles}>
                    <FontAwesomeIcon icon = {faTimes} className='Close' onClick={HideMenu}/>
                     <ul>
                       <Fade bottom>
                       <li><a href=''>Model S</a></li>
                       <li><a href=''>Model 3</a></li>
                       <li><a href=''>Model X</a></li>
                       <li><a href=''>Model Y</a></li>
                       <li><a href=''>Existing Inventory</a></li>
                       <li><a href=''>Used Inventory</a></li>
                       <li><a href=''>Trade-in</a></li>
                       <li><a href=''>Cybertruck</a></li>
                       <li><a href=''>Roadster</a></li>
                       <li><a href=''>Semi</a></li>
                       <li><a href=''>Charging</a></li>
                       <li><a href=''>Power</a></li>
                       </Fade>
                     </ul>
                  </BurgerNav>
               </Head>
    )
}

export default Header

let Head = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:95%;
   position:fixed;
   margin:20px 25px;
   z-index:2;
   .Navbar{
     @media(max-width:768px){
       display:none;
     }
   }
`
let RightMenu = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 li{
   list-style:none;
   font-size:19px;
   font-weight:600;
   text-transform:uppercase;
   padding:8px 12px;
 }
 li a{
   text-decoration:none;
   color:#000;
 }
 li::after{
  content: '';
  width: 0;
  height: 2px;
  background-color: #000;
  display: block;
  transition: 0.5s;
  margin: auto;
 }
 li:hover::after{
   width:100%;
 }
`
let BurgerNav = styled.div`
  height:100vh;
  width:350px;
  background-color:#fff;
  top:0;
  right:-350px;
  position:fixed;
  max-height:100vh;
  overflow-y:auto;
  z-index:5;
  transition:1s;
  .Navbar{
    display:block;
  }
  ::-webkit-scrollbar-track{
    width:5px;
    border-radius:8px;
    background-color:#fff;
  }
  ::-webkit-scrollbar-thumb{
    width:5px;
    border-radius:8px;
    background-color:#333;
  }
  ::-webkit-scrollbar{
    width:5px;
    border-radius:8px;
    background-color:#fff;
  }
  ul{
    margin:50px 10px;
  }
  ul li{
    margin:25px 0;
    text-align:left;
    border-bottom:1px solid #333;
    padding:10px 20px;
    list-style:none;
    display:block;
    text-transform:none;
  }
  ul li a{
    font-size:19px;
    font-weight:600;
    text-decoration:none;
  }
`
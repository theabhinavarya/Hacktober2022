import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>
        
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Solar Panels</a>
        <a href="#">Solar Roofs</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick = {() => setBurgerStatus(true)}/>
      </RightMenu> 
      <BurgerNav show ={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick = {() => setBurgerStatus(false)}/>
        </CloseWrapper>
        
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Solar Panels</a>
        <a href="#">Solar Roofs</a>
        <a href="#">Existing Inventory</a>
        <a href="#">Used Inventory</a>
        <a href="#">Trade-in</a>
        <a href="#">Cybertruck</a>
        <a href="#">Roadster</a>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:55px;
  position:fixed;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 30px;
  top:0;
  right:0;
  left:0;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    padding:0 10px;
    text-transform: uppercase;
    flex-wrap:nowrap;  
    :hover{
      background-color: rgba(144,144,144,0.3);
      padding:10px;
      border-radius: 10px;
      color:rgba(0,0,0,1);
    }
  }
  
  @media (max-width:768px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items: center;

  a{
    font-weight:600;
    padding:0 10px;
    text-transform: uppercase;
    margin-right:10px;
    flex-wrap:nowrap;
    :hover{
      background-color: rgba(144,144,144,0.3);
      padding:10px;
      border-radius: 10px;
      color:rgba(0,0,0,1);
    }
  }  
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerNav = styled.div`
  position:fixed;
  right:0;
  top:0;
  bottom:0;
  background: whitesmoke;
  width: 300px;
  z-index:16;
  padding :20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props => props.show ? 'translateX(0)' :'translateX(100%)'};
  transition: transform 0.2s;
a{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.25);
  font-weight: 600; 
}
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
  padding:10px;
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`
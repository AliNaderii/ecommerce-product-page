// TOOLS
import { useState } from "react";
// CONTEXT HOOK
import { useCartContext } from "../hooks/useCartContext";
// STYLES
import { StyledNavbar, LinksSection, Logo, StyledLinks, CartSection, Cart, Avatar, ItemCounter, MenuIcon, SideMenu, CloseButton } from "../styles/Navbar.styled";
// COMPONENTS
import CartItems from "./CartItems";
import Links from './Links';

export default function Navbar() {
  const [toggleCartItems, setToggleCartItems] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { state } = useCartContext();

  const showCartItems = () => {
    setToggleCartItems(prevstate => !prevstate);
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <StyledNavbar>
      <LinksSection>
        <MenuIcon aria-label='menu icon' onClick={ toggleSideMenu }>
          <img src="./images/icon-menu.svg" alt="menu icon" />
        </MenuIcon>
        <Logo>
          <h1>sneakers</h1></Logo>
        <StyledLinks>
          <Links />
        </StyledLinks>
      </LinksSection>
      <CartSection>
        <Cart aria-label="shopping cart" onClick={ showCartItems }>
          <img src="./images/icon-cart.svg" alt="shopping cart" />
          { state.qty !== 0 && <ItemCounter><p>{ state.qty }</p></ItemCounter> }
        </Cart>
        <Avatar src='./images/image-avatar.png' />
        { toggleCartItems && <CartItems /> }
      </CartSection>
      { showSideMenu &&
        <SideMenu>
          <CloseButton onClick={ toggleSideMenu }>
            <img src="./images/icon-close.svg" alt="close icon" />
          </CloseButton>
          <Links />
        </SideMenu>
      }
    </StyledNavbar>
  );
}

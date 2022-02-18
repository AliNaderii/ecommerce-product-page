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
  // CART ITEMS SECTION STATE
  const [showCartItems, setShowCartItems] = useState(false);
  // SIDE MENU STATE
  const [showSideMenu, setShowSideMenu] = useState(false);
  // CONTEXT CUSTOM HOOK
  const { state } = useCartContext();

  // CART ITEMS SECTION TOGGLER
  const toggleCartItems = () => {
    setShowCartItems(prevstate => !prevstate);
  };

  // SIDE MENU TOGGLER
  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <StyledNavbar>

      {/* LINKS SECTION */ }
      <LinksSection>
        <MenuIcon aria-label='menu icon' onClick={ toggleSideMenu }>
          <img src="./images/icon-menu.svg" alt="menu icon" />
        </MenuIcon>

        <Logo><h1>sneakers</h1></Logo>

        <StyledLinks>
          <Links />
        </StyledLinks>
      </LinksSection>

      {/* CART SECTION */ }
      <CartSection>
        <Cart aria-label="shopping cart" onClick={ toggleCartItems }>
          <img src="./images/icon-cart.svg" alt="shopping cart" />
          { state.qty !== 0 && <ItemCounter><p>{ state.qty }</p></ItemCounter> }
        </Cart>

        <Avatar src='./images/image-avatar.png' />

        { showCartItems && <CartItems /> }
      </CartSection>

      {/* SIDE MENU */ }
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

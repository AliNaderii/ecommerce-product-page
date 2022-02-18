// TOOLS
import { useState } from "react";
// CONTEXT HOOK
import { useCartContext } from "../hooks/useCartContext";
// STYLES
import { StyledNavbar, LinksSection, Logo, StyledLinks, CartSection, Cart, Avatar, ItemCounter, MenuIcon, SideMenu, CloseButton } from "../styles/Navbar.styled";
// COMPONENTS
import CartItems from "./CartItems";
import Links from './Links';
// ICONS
import { ReactComponent as CartIcon } from '../icon/icon-cart.svg';
import { ReactComponent as Hamburgur } from '../icon/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../icon/icon-close.svg';

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
          <Hamburgur alt="menu icon" />
        </MenuIcon>

        <Logo><h1>sneakers</h1></Logo>

        <StyledLinks>
          <Links />
        </StyledLinks>
      </LinksSection>

      {/* CART SECTION */ }
      <CartSection>
        <Cart aria-label="shopping cart" onClick={ toggleCartItems }>
          <CartIcon />
          { state.qty !== 0 && <ItemCounter><p>{ state.qty }</p></ItemCounter> }
        </Cart>

        <Avatar src='./images/image-avatar.png' alt='user avatar' />

        { showCartItems && <CartItems /> }
      </CartSection>

      {/* SIDE MENU */ }
      { showSideMenu &&
        <SideMenu>
          <CloseButton onClick={ toggleSideMenu } aria-label='close icon'>
            <CloseIcon />
          </CloseButton>
          <Links />
        </SideMenu>
      }
    </StyledNavbar>
  );
}

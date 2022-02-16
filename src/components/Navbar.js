// TOOLS
import { useState } from "react";
// CONTEXT HOOK
import { useCartContext } from "../hooks/useCartContext";
// STYLES
import { StyledNavbar, LinksSection, Logo, Links, CartSection, Cart, Avatar, ItemCounter } from "../styles/Navbar.styled";
// COMPONENTS
import CartItems from "./CartItems";

export default function Navbar() {
  const [toggleCartItems, setToggleCartItems] = useState(false);
  const { state } = useCartContext();

  const showCartItems = () => {
    setToggleCartItems(prevstate => !prevstate);
  };

  return (
    <StyledNavbar>
      <LinksSection>
        <Logo><h1>sneakers</h1></Logo>
        <Links>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </Links>
      </LinksSection>
      <CartSection>
        <Cart aria-label="shopping cart" onClick={ showCartItems }>
          <img src="./images/icon-cart.svg" alt="shopping cart" />
          { state.qty !== 0 && <ItemCounter><p>{ state.qty }</p></ItemCounter> }
        </Cart>
        <Avatar src='./images/image-avatar.png' />
        { toggleCartItems && <CartItems /> }
      </CartSection>
    </StyledNavbar>
  );
}

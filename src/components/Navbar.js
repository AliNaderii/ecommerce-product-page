// STYLES
import { StyledNavbar, LinksSection, Logo, Links, CartSection, Cart, Avatar, ItemCounter } from "../styles/Navbar.styled";
// COMPONENTS
import CartItems from "./CartItems";

export default function Navbar() {
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
        <Cart aria-label="shopping cart">
          <img src="./images/icon-cart.svg" alt="shopping cart" />
          <ItemCounter><p>3</p></ItemCounter>
        </Cart>
        <Avatar src='./images/image-avatar.png' />
        <CartItems />
      </CartSection>
    </StyledNavbar>
  );
}

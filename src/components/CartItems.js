// STYLES
import { StyledCartItems, Title, Summary, DeleteIcon, CheckoutButton, EmptyCart } from "../styles/CartItems.styled";

export default function CartItems() {
  return (
    <StyledCartItems>
      <Title><p>Cart</p></Title>
      <Summary>
        <img src="./images/image-product-1-thumbnail.jpg" alt="item thumbnail" />
        <div>
          <p>
            Fall Limited Edition Sneakers <br />
            $125.00 x 3 <span>$375.00</span>
          </p>
          <DeleteIcon aria-label="delete button">
            <img src="./images/icon-delete.svg" alt="delete icon" />
          </DeleteIcon>
        </div>
      </Summary>
      <CheckoutButton>Checkout</CheckoutButton>
      {/* <EmptyCart><p>Your cart is empty</p></EmptyCart> */ }
    </StyledCartItems>
  );
}
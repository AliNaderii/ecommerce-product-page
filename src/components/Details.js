// STYLES
import { StyledDetails, Description, PriceTag, ActionButtons, Counter, AddToCart } from "../styles/Details.styled";

export default function Details() {
  return (
    <StyledDetails>
      <p>SNEAKER COMPANY</p>
      <Description>
        <h2>Fall Limited Edition<br />Sneakers</h2>
        <p>These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole. they'll
          withstand everything the weather can offer.
        </p>
      </Description>
      <PriceTag>
        <p>$125.00 <span><strong>50%</strong></span></p>
        <p><small>$250.00</small></p>
      </PriceTag>
      <ActionButtons>
        <Counter>
          <button aria-label="delete item">
            <img src="./images/icon-minus.svg" alt="delete item" />
          </button>
          <span>0</span>
          <button aria-label="add item">
            <img src="./images/icon-plus.svg" alt="add item" />
          </button>
        </Counter>
        <AddToCart aria-label="add to cart">
          <img src="./images/icon-cart.svg" alt="delete item" />
          <span>Add to cart</span>
        </AddToCart>
      </ActionButtons>
    </StyledDetails>
  );
}
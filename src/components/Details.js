// CONTEXT HOOK
import { useCartContext } from '../hooks/useCartContext';
// STYLES
import { StyledDetails, Description, PriceTag, ActionButtons, Counter, AddToCart } from "../styles/Details.styled";
// ICONS
import { ReactComponent as MinusIcon } from '../icon/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../icon/icon-plus.svg';
import { ReactComponent as CartIcon } from '../icon/icon-cart.svg';

export default function Details() {
  // CONTEXT CUSTOM HOOK
  const { state, dispatch } = useCartContext();

  // DECREMENT && INCREMENT ITEM FUNCTIONS
  const decrementItem = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const incrementItem = () => {
    dispatch({ type: 'INCREMENT' });
  };

  // ADD ITEMS TO CART FUNCTION
  const addItems = () => {
    dispatch({ type: 'ITEMS_ADDED', payload: state.cartItems });
  };

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
          <button aria-label="delete item" onClick={ decrementItem }>
            <MinusIcon />
          </button>
          <span>{ state.cartItems }</span>
          <button aria-label="add item" onClick={ incrementItem }>
            <PlusIcon />
          </button>
        </Counter>

        <AddToCart aria-label="add to cart" onClick={ addItems }>
          <CartIcon />
          <span>Add to cart</span>
        </AddToCart>
      </ActionButtons>
    </StyledDetails>
  );
}
// TOOLS
import { useState } from 'react';
// CONTEXT HOOK
import { useCartContext } from '../hooks/useCartContext';
// STYLES
import { StyledDetails, Title, Text, PriceTag, ActionButtons, Counter, AddToCart } from "../styles/Details.styled";
// ICONS
import { ReactComponent as MinusIcon } from '../icon/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../icon/icon-plus.svg';
import { ReactComponent as CartIcon } from '../icon/icon-cart.svg';

export default function Details() {
  const [count, setCount] = useState(0);
  // CONTEXT CUSTOM HOOK
  const { dispatch } = useCartContext();

  // DECREMENT && INCREMENT ITEM FUNCTIONS
  const decrementItem = () => {
    setCount(prevState => prevState > 0 ? prevState - 1 : 0);
  };

  const incrementItem = () => {
    setCount(prevState => prevState + 1);
  };

  // ADD ITEMS TO CART FUNCTION
  const addItems = (count) => {
    if (count > 0) {
      dispatch({ type: 'ITEMS_ADDED', payload: count });
    }
  };

  return (
    <StyledDetails>

      <Title>
        <p>SNEAKER COMPANY</p>
        <h2>Fall Limited Edition<br />Sneakers</h2>
      </Title>

      <Text>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole. they'll
        withstand everything the weather can offer.
      </Text>

      <PriceTag>
        <p>$125.00 <span><strong>50%</strong></span></p>
        <p><small>$250.00</small></p>
      </PriceTag>

      <ActionButtons>
        <Counter>
          <button aria-label="delete item" onClick={ decrementItem }>
            <MinusIcon />
          </button>
          <span>{ count }</span>
          <button aria-label="add item" onClick={ incrementItem }>
            <PlusIcon />
          </button>
        </Counter>

        <AddToCart aria-label="add to cart" onClick={ () => addItems(count) }>
          <CartIcon />
          <span>Add to cart</span>
        </AddToCart>
      </ActionButtons>
    </StyledDetails>
  );
}
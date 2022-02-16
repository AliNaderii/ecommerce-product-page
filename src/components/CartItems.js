// CONTEXT HOOK
import { useCartContext } from "../hooks/useCartContext";
// STYLES
import { StyledCartItems, Title, Summary, DeleteIcon, CheckoutButton, EmptyCart } from "../styles/CartItems.styled";

export default function CartItems() {
  const { state, dispatch } = useCartContext();
  const emptyCart = () => {
    dispatch({ type: 'DELETE_ITEMS' });
  };
  return (
    <StyledCartItems>
      <Title><p>Cart</p></Title>
      { state.qty !== 0 && (
        <>
          <Summary>
            <img src="./images/image-product-1-thumbnail.jpg" alt="item thumbnail" />
            <div>
              <p>
                Fall Limited Edition Sneakers <br />
                $125.00 x { state.qty } <span>{ `$${125 * state.qty}.00` }</span>
              </p>
              <DeleteIcon aria-label="delete button" onClick={ emptyCart }>
                <img src="./images/icon-delete.svg" alt="delete icon" />
              </DeleteIcon>
            </div>
          </Summary>
          <CheckoutButton>Checkout</CheckoutButton>
        </>
      ) }
      { state.qty === 0 && <EmptyCart><p>Your cart is empty</p></EmptyCart> }
    </StyledCartItems>
  );
}
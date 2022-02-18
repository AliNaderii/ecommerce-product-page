import styled from "styled-components";
import { AddToCart } from "./Details.styled";

// CART ITEMS CONTAINER
export const StyledCartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 0px;
  margin-top: 20px;
  padding: 10px 0 20px 0;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3),
  -3px 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: fit-content;
  width: 320px;
  z-index: 1;

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 30px;
    top: 60px;
  }
`;

// TITLE SECTION
export const Title = styled.div`
  align-self: flex-start;
  width: 100%;
  height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme['Grayish blue']};
  font-weight: 700;

  p {
    margin-left: 25px;
  }
`;

// ITEM DETAILS SECTION
export const Summary = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 15px;
  }

  div {
    display: flex;

    p {
      font-size: 14px;
      color: ${({ theme }) => theme['Dark grayish blue']};

      span {
        color: ${({ theme }) => theme['Very dark blue']};
        font-weight: 700;
        margin-left: 10px;
      }
    }
  }
`;

// EMPTY CART ICON
export const IconContainer = styled.button`
    svg {
      border-radius: unset;
      margin-left: 15px;
      fill: #C3CAD9;

      &:hover {
        fill: ${({ theme }) => theme['Black']};
      }
    }
`;

// CHECKOUT BUTTON
export const CheckoutButton = styled(AddToCart)`
  display: block;
  color: #fff;
  font-weight: 700;
  margin: 5px 10px;
  width: 90%;
`;

// WHEN CART IS EMPTY
export const EmptyCart = styled.div`
  margin: 50px auto 50px auto;

  p {
    color: ${({ theme }) => theme['Dark grayish blue']};
    font-weight: 700;
  }
`;
import styled from "styled-components";
import { AddToCart } from "./Details.styled";

export const StyledCartItems = styled.div`
  visibility: hidden;
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
`;

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

export const DeleteIcon = styled.button`
    img {
      width: 12px;
      height: 14px;
      border-radius: unset;
      margin-left: 15px;
    }
`;

export const CheckoutButton = styled(AddToCart)`
  display: block;
  color: #fff;
  font-weight: 700;
  margin: 5px 10px;
  width: 90%;
`;

export const EmptyCart = styled.div`
  margin: 50px auto 50px auto;

  p {
    color: ${({ theme }) => theme['Dark grayish blue']};
    font-weight: 700;
  }
`;
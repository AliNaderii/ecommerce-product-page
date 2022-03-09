import styled from "styled-components";

// ITEM DETAILS CONTAINER
export const StyledDetails = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  width: 450px;

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    padding: 0 25px;
    width: 100%;
    margin-top: 15px;
  }

`;

// TITLE
export const Title = styled.div`

  p {
    color: ${({ theme }) => theme['Orange']};
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 700;
  }

  h2 {
    font-size: 30px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

// ITEM DESCRIPTION
export const Description = styled.div`

  
`;

// DESCRIPTION TEXT
export const Text = styled.p`
  color: ${({ theme }) => theme['Dark grayish blue']};
  margin-top: 30px;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

`;

// ITEM PRICE TAG
export const PriceTag = styled.div`
  margin: 30px 0;

  p {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: 700;
    color: ${({ theme }) => theme['Very dark blue']};

    span {
      display: inline-flex;
      align-items: center;
      height: 25px;
      font-size: 16px;
      margin-left: 15px;
      padding: 2px 10px;
      background-color: ${({ theme }) => theme['Pale orange']};
      border-radius: 10px;
      color: ${({ theme }) => theme['Orange']};
    }

    small {
      font-size: 16px;
      color: ${({ theme }) => theme['Grayish blue']};
      text-decoration: line-through;
    }
  }

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

// ACTION BUTTONS CONTAINER
export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  width: 100%;

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    margin-top: 15px;
  }
`;

// INCREMENT AND DECREMENT BUTTONS
export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme['Light grayish blue']};
  padding:10px;
  border-radius: 10px;
  font-weight: 700;

  button:nth-child(1) {
      transform: translateY(-2px);
    }

  button:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

// ADD ITEMS TO CART BUTTON
export const AddToCart = styled.button`
  background-color: ${({ theme }) => theme['Orange']};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    fill: #fff;
  }

  span {
    display: inline-block;
    color: #fff;
    font-weight: 700;
    margin-left: 15px;
    transform: translateY(-5px);
    font-size: 16px;
  }
`;
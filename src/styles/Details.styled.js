import styled from "styled-components";

export const StyledDetails = styled.section`
  margin: 0 auto;
  padding-top: 25px;

  p {
    color: ${({ theme }) => theme['Orange']};
    font-weight: 700;
  }
`;

export const Description = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 36px;
    line-height: 1.2;
  }
  p {
    color: ${({ theme }) => theme['Dark grayish blue']};
    margin: 30px 0 20px 0;

    font-weight: 400;
  }
`;

export const PriceTag = styled.div`
  p {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme['Very dark blue']};

    span {
      display: inline-flex;
      align-items: center;
      height: 25px;
      font-size: 16px;
      margin-left: 20px;
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
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  margin-top: 35px;
  width: 100%;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme['Light grayish blue']};
  padding:10px;
  border-radius: 10px;
  font-weight: 700;

  button:hover {
    cursor: pointer;
  }
`;

export const AddToCart = styled.button`
  justify-self: stretch;
  background-color: ${({ theme }) => theme['Orange']};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;

  span {
    display: inline-block;
    color: #fff;
    font-weight: 700;
    margin-left: 15px;
    transform: translateY(-5px);
    font-size: 16px;
  }
`;
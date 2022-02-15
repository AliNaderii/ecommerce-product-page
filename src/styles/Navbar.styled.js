import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 80%;
  height: 125px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme['Grayish blue']};
`;

export const LinksSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme['Very dark blue']};
`;

export const Links = styled.ul`
  margin-left: 35px;
  height: 100%;
  

    li {
      display: inline-block;
      margin: 0 20px;
      height: 100%;
    }

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme['Dark grayish blue']};
      height: 100%;

      &:hover {
        border-bottom: 5px solid ${({ theme }) => theme['Orange']};
        color: ${({ theme }) => theme['Black']};
        font-weight: 700;
      }
    }
`;

export const CartSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Cart = styled.button`
  position: relative;
  border: none;
  background-color: unset;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemCounter = styled.div`
  visibility: hidden;
  position: absolute;
  top: -7px;
  right: -10px;
  padding: 1px 7px;
  color: #fff;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme['Orange']};
  border-radius: 10px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 35px;

  &:hover {
    cursor: pointer;
    outline: 3px solid ${({ theme }) => theme['Orange']}
  }
`;
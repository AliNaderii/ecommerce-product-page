import styled from "styled-components";
import { CloseIcon } from "./Lightbox.styled";

export const StyledNavbar = styled.nav`
  width: 80%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme['Grayish blue']};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 75px;
    border-bottom: unset;
    justify-content: flex-start;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuIcon = styled.button`
  display: none;
  height: 100%;
  width: 10%;
  margin: 0 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export const SideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  z-index: 1;
  background-color: #fff;
  color: ${({ theme }) => theme['Dark grayish blue']};
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 10px;

  li {
    margin-top: 20px;
  }

  a {
    color: ${({ theme }) => theme['Very dark blue']};
    font-weight: 700;
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: relative;
  margin-right: auto;
  margin-bottom: 25px;
  top: 0;
  left: -5px;
`;

export const Logo = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme['Very dark blue']};
`;

export const StyledLinks = styled.ul`
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
  `;

export const CartSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: auto;
  }
`;

export const Cart = styled.button`
  position: relative;
  border: none;
  background-color: unset;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 10px;
  }
`;

export const ItemCounter = styled.div`
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 35px;
    width: 35px;
    margin: 0 15px;
  }

  &:hover {
    cursor: pointer;
    outline: 3px solid ${({ theme }) => theme['Orange']}
  }
`;
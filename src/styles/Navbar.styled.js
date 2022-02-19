import styled from "styled-components";
// STYLED COMPONENTS
import { CloseButton as CloseBtn } from "./Lightbox.styled";

// NAVBAR SECTION CONTAINER
export const StyledNavbar = styled.nav`
  width: 80%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme['Grayish blue']};

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    width: 100vw;
    height: 75px;
    border-bottom: unset;
    justify-content: flex-start;
  }
`;

// LINKS SECTION CONTAINER
export const LinksSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

// HAMBURGER ICON
export const MenuIcon = styled.button`
  display: none;
  height: 100%;
  width: 10%;
  margin: 0 15px;

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 980px) {
    display: block;
  }
`;

// SIDE MENU
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

// CLOSE BUTTON
export const CloseButton = styled(CloseBtn)`
  position: relative;
  margin-right: auto;
  margin-bottom: 25px;
  top: 0;
  left: -5px;

  svg {
    fill: ${({ theme }) => theme['Very dark blue']};
  }
`;

// SITE LOGO
export const Logo = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme['Very dark blue']};
`;

// LINKS
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

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 980px) {
    display: none;
  }
  `;

// CART SECTION CONTAINER
export const CartSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    margin-left: auto;
  }
`;

// CART ICON
export const Cart = styled.button`
  position: relative;
  border: none;
  background-color: unset;

  &:hover {
    cursor: pointer;
  }

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    margin-right: 10px;
  }
`;

// ITEM COUNTER WHEN ADDING ITEMS TO CART
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

// USER AVATAR
export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 35px;

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    height: 35px;
    width: 35px;
    margin: 0 15px;
  }

  &:hover {
    cursor: pointer;
    outline: 3px solid ${({ theme }) => theme['Orange']}
  }
`;
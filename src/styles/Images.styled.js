import styled from "styled-components";
// STYLED COMPONENTS
import { PrevButton as PrevBtn, NextButton as NextBtn } from "../styles/Lightbox.styled";

// IMAGE SECTION CONTAINER
export const StyledImages = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

// PRODUCT IMAGE
export const Product = styled.div`
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    border-radius: 20px;
  }

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      border-radius: unset;
    }
  }
`;

// PREVIOUS BUTTON
export const PrevButton = styled(PrevBtn)`
  display: none;
  left: 0;
  margin-left: 15px;

  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
  }

  &:hover {
    svg {
      fill: #fff;
      stroke: #1D2026;
    stroke-width: 3px;
    }
  }

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

// NEXT BUTTON
export const NextButton = styled(NextBtn)`
  display: none;
  right: 0;
  margin-right: 15px;

  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
  }

  &:hover {
    svg {
      fill: #fff;
      stroke: #1D2026;
      stroke-width: 3px;
    }
  }

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

// THUMBNAILS SECTION CONTAINER
export const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 5px;

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

// THUMBNAILS
export const Thumb = styled.div`
  position: relative;
  img {
    width: 100px;
    height: 100%;
    border-radius: 20px;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    outline: 3px solid ${({ theme }) => theme['Orange']};
    overflow: hidden;
    border-radius: 20px;

  }
`;


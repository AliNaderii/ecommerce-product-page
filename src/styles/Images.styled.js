import styled from "styled-components";
// STYLED COMPONENTS
import { PrevButton as PrevBtn, NextButton as NextBtn } from "../styles/Lightbox.styled";

// IMAGE SECTION CONTAINER
export const StyledImages = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 450px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

// PRODUCT IMAGE
export const Product = styled.div`

    img {
      width: 100%;
      cursor: pointer;
      border-radius: 20px;
    }


  /* MEDIA QUERY */
  @media (max-width: 768px) {

    img {
      border-radius: unset;
      height: 100%;
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    display: block;
  }
`;

// THUMBNAILS SECTION CONTAINER
export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin: 20px auto;

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    display: none;
  }
`;

// THUMBNAILS
export const Thumb = styled.div`
  position: relative;
  width: 110px;
  height: 90px;
  outline: ${({ active }) => active ? `4px solid hsl(26, 100%, 55%)` : 'unset'};
  border-radius: 15px;
  overflow: hidden;
  
  img {
  width: 100%;
  opacity: ${({ active }) => active ? `0.6` : 'unset'};

    &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
}
`;
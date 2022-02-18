import styled from "styled-components";

// LIGHTBOX CONTAINER
export const StyledLightbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['Black']};
  z-index: 1;

  /* MEDIA QUERY */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

// LIGHTBOX IMAGE CONTAINER
export const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  width: 500px;
`;

// PRODCUT IMAGE
export const Product = styled.div`
  position: relative;

  img {
  width: 100%;
  border-radius: 20px;
  }
`;

// THUMBNAILS CONTAINER
export const Thumbnails = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
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

// CLOSE BUTTON
export const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 25px;
  height: 25px;

  svg {
    fill: #fff;

    &:hover {
      fill: ${({ theme }) => theme['Orange']};
    }
  }
`;

// PREVIOUS BUTTON
export const PrevButton = styled.button`
  position: absolute;
  top: 45%;
  left: -25px;
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  
  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
  }
  &:hover {
   svg {
    stroke: ${({ theme }) => theme['Orange']};
   }
  }
`;

// NEXT BUTTON
export const NextButton = styled.button`
  position: absolute;
  top: 45%;
  right: -25px;
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
  }

  &:hover {
    svg{
      stroke: ${({ theme }) => theme['Orange']};
    }
  }
`;


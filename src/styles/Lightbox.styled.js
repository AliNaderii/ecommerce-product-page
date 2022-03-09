import styled from "styled-components";

// LIGHTBOX CONTAINER
export const StyledLightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme['Black']};
  z-index: 1;

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    display: none;
  }
`;

// CLOSE BUTTON
export const CloseButton = styled.button`
  text-align: right;
  margin-bottom: 10px;
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
  background-color: #fff;
  border-radius: 50%;
  top: 35%;
  left: -30px;
  padding: 15px 20px;
  
  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
    margin-top: 2px;
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
  background-color: #fff;
  border-radius: 50%;
  right: -30px;
  top: 35%;
  padding: 15px 20px;

  svg {
    fill: #fff;
    stroke: #1D2026;
    stroke-width: 3px;
    margin-top: 2px;
  }

  &:hover {
    svg{
      stroke: ${({ theme }) => theme['Orange']};
    }
  }
`;


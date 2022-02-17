import styled from "styled-components";
import { PreviousIcon, NextIcon } from "../styles/Lightbox.styled";


export const StyledImages = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

export const Product = styled.div`
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    border-radius: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      border-radius: unset;
    }
  }
`;

export const PrevButton = styled(PreviousIcon)`
  display: none;
  left: 0;
  margin-left: 15px;

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export const NextButton = styled(NextIcon)`
  display: none;
  right: 0;
  margin-right: 15px;

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

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


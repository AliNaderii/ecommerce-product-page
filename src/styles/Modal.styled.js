import styled from "styled-components";

export const StyledModal = styled.div`
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
`;

export const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  width: 500px;
`;

export const Product = styled.div`
  position: relative;

  img {
  width: 100%;
  border-radius: 20px;
  }
`;

export const Thumbnails = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;

    &:hover {
      cursor: pointer;
      opacity:0.5;
    }
  }
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 25px;
  height: 25px;
`;

export const PreviousIcon = styled.button`
  position: absolute;
  top: 45%;
  left: -25px;
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  
  img {
    width: 20px;
    height: 20px;
  }
`;

export const NextIcon = styled.button`
  position: absolute;
  top: 45%;
  right: -25px;
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  img {
    width: 20px;
    height: 20px;
  }
`;

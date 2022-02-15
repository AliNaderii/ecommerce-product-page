import styled from "styled-components";

export const StyledImages = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

export const Product = styled.img`
  width: 425px;
  max-height: 75%;
  border-radius: 20px;
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
      opacity: 0.6;
    }
  }
`;
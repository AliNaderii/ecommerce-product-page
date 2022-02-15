// STYLES
import { StyledModal, ImageContainer, Product, Thumbnails, CloseIcon, PreviousIcon, NextIcon } from "../styles/Modal.styled";

export default function Modal({ images: { thumbs }, toggle }) {
  return (
    <StyledModal>
      <ImageContainer>
        <Product>
          <img src="./images/image-product-1.jpg" alt="product" />

          <CloseIcon onClick={ toggle }>
            <img src="./images/icon-close.svg" alt="" />
          </CloseIcon>

          <PreviousIcon>
            <img src="./images/icon-previous.svg" alt="previous icon" />
          </PreviousIcon>

          <NextIcon>
            <img src='./images/icon-next.svg' alt='next icon' />
          </NextIcon>

        </Product>
        <Thumbnails>
          { thumbs.map(thumb => (
            <img src={ `./images/${thumb}` } alt="thumbnail" key={ thumb } />
          )) }
        </Thumbnails>
      </ImageContainer>
    </StyledModal>
  );
}
// TOOLS
import { useState } from "react";
// STYLES
import { StyledLightbox, ImageContainer, Product, Thumbnails, Thumb, CloseIcon, PreviousIcon, NextIcon } from "../styles/Lightbox.styled";

export default function Lightbox({ images, toggle }) {
  const productSrc = images.map(image => image.product);
  const [id, setId] = useState(0);
  const [activeId, setActiveId] = useState();

  const changeSrc = (id) => {
    setActiveId(id);
    setId(id - 1);
  };

  const prevImage = () => {
    setId(prevstate => prevstate === 0 ? productSrc.length - 1 : prevstate - 1);
  };

  const nextImage = () => {
    setId(prevstate => prevstate === productSrc.length - 1 ? 0 : prevstate + 1);
  };

  return (
    <StyledLightbox>
      <ImageContainer>
        <Product>
          <img src={ productSrc[id] } alt='product' />

          <CloseIcon onClick={ toggle }>
            <img src="./images/icon-close.svg" alt="" />
          </CloseIcon>

          <PreviousIcon onClick={ prevImage }>
            <img src="./images/icon-previous.svg" alt="previous icon" />
          </PreviousIcon>

          <NextIcon onClick={ nextImage }>
            <img src='./images/icon-next.svg' alt='next icon' />
          </NextIcon>

        </Product>
        <Thumbnails>
          { images.map((image, index) => (
            <Thumb key={ image.id }>
              <img
                src={ image.thumb }
                alt="thumbnail"
                key={ index }
                onClick={ () => changeSrc(image.id) }
              />
              {
                (activeId === image.id)
                &&
                <div key={ image.id }></div>
              }
            </Thumb>
          ))
          }
        </Thumbnails>
      </ImageContainer>
    </StyledLightbox>
  );
}
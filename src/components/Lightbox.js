// TOOLS
import { useState } from "react";
// STYLES
import { StyledLightbox, ImageContainer, Product, Thumbnails, Thumb, CloseIcon, PreviousIcon, NextIcon } from "../styles/Lightbox.styled";

export default function Lightbox({ images, toggle }) {
  // ARRAY OF PRODUCT IMAGE SOURCES
  const productImageSrc = images.map(image => image.product);

  // ID FOR THE CURRENT PRODUCT IMAGE THAT IS BEING DESPLAYED
  const [id, setId] = useState(0);

  // ACTIVE THUMBNAIL IMAGE
  const [activeId, setActiveId] = useState();

  // CHANGE IMAGE WITH CLICKING ON THUMBS
  const changeSrc = (id) => {
    setActiveId(id);
    setId(id - 1);
  };

  // PREVIOUS & NEXT IMAGE 
  const prevImage = () => {
    setId(prevstate => prevstate === 0 ? productImageSrc.length - 1 : prevstate - 1);
  };

  const nextImage = () => {
    setId(prevstate => prevstate === productImageSrc.length - 1 ? 0 : prevstate + 1);
  };

  return (
    <StyledLightbox>
      <ImageContainer>
        <Product>
          <img src={ productImageSrc[id] } alt='product' />

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
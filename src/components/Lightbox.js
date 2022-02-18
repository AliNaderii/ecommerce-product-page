// TOOLS
import { useState } from "react";
// STYLES
import { StyledLightbox, ImageContainer, Product, Thumbnails, Thumb, CloseButton, PrevButton, NextButton } from "../styles/Lightbox.styled";
// ICONS
import { ReactComponent as CloseIcon } from '../icon/icon-close.svg';
import { ReactComponent as PrevIcon } from '../icon/icon-previous.svg';
import { ReactComponent as NextIcon } from '../icon/icon-next.svg';

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

          <CloseButton onClick={ toggle }>
            <CloseIcon alt="colse icon" />
          </CloseButton>

          <PrevButton onClick={ prevImage }>
            <PrevIcon alt="previous icon" />
          </PrevButton>

          <NextButton onClick={ nextImage }>
            <NextIcon alt='next icon' />
          </NextButton>
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
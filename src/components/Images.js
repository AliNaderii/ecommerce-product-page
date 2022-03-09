// TOOLS
import { useState } from "react";
// STYLES
import { StyledImages, Product, Thumbnails, Thumb, PrevButton, NextButton } from "../styles/Images.styled";
// ICONS
import { ReactComponent as PrevIcon } from '../icon/icon-previous.svg';
import { ReactComponent as NextIcon } from '../icon/icon-next.svg';
// COMPOENENTS
import Lightbox from "./Lightbox";

export default function Images({ images }) {
  const [showLightbox, setShowLightbox] = useState(false);

  // SHOW & HIDE LIGHTBOX
  const toggleLightbox = () => {
    setShowLightbox(!showLightbox);
  };

  // ARRAY OF PRODUCT IMAGE SOURCES
  const productImageSource = images.map(image => image.product);

  // ID FOR THE CURRENT PRODUCT IMAGE THAT IS BEING DESPLAYED
  const [id, setId] = useState(0);

  // ACTIVE THUMBNAIL IMAGE
  const [activeId, setActiveId] = useState(1);

  // CHANGE IMAGE WITH CLICKING ON THUMBS
  const changeSrc = (id) => {
    setActiveId(id);
    setId(id - 1);
  };

  // PREVIOUS & NEXT IMAGE 
  const nextProductImage = () => {
    setId(prevstate => prevstate === productImageSource.length - 1 ? 0 : prevstate + 1);
  };

  const prevProductImage = () => {
    setId(prevstate => prevstate === 0 ? productImageSource.length - 1 : prevstate - 1);
  };

  return (
    <StyledImages>
      <Product >
        <img src={ productImageSource[id] } alt="product" onClick={ toggleLightbox } />

        <PrevButton onClick={ prevProductImage } aria-label='prev button'>
          <PrevIcon />
        </PrevButton>

        <NextButton onClick={ nextProductImage } aria-label='next button'>
          <NextIcon />
        </NextButton>
      </Product>

      <Thumbnails>
        { images.map((image) => (
          <Thumb
            key={ image.id }
            active={ activeId === image.id ? 1 : 0 } >
            <img
              src={ image.thumb }
              alt="thumbnail"
              onClick={ () => changeSrc(image.id) }
            />
          </Thumb>
        ))
        }
      </Thumbnails>

      { showLightbox
        &&
        <Lightbox images={ images } toggle={ toggleLightbox } prevImage={ prevProductImage } nextImage={ nextProductImage } />
      }

    </StyledImages>
  );
}
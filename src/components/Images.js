// TOOLS
import { useState } from "react";
// STYLES
import { StyledImages, Product, Thumbnails, Thumb, PrevButton, NextButton } from "../styles/Images.styled";

export default function Images({ images, toggleLightbox }) {
  // ARRAY OF PRODUCT IMAGE SOURCES
  const productImageSource = images.map(image => image.product);

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
  const nextProductImage = () => {
    setId(prevstate => prevstate === productImageSource.length - 1 ? 0 : prevstate + 1);
  };

  const prevProductImage = () => {
    setId(prevstate => prevstate === 0 ? productImageSource.length - 1 : prevstate - 1);
  };

  return (
    <StyledImages>
      <Product onClick={ toggleLightbox }>
        <img src={ productImageSource[id] } alt="product" />
        <PrevButton onClick={ prevProductImage } aria-label='prev button'>
          <img src="./images/icon-previous.svg" alt="previous icon" />
        </PrevButton>

        <NextButton onClick={ nextProductImage } aria-label='next button'>
          <img src='./images/icon-next.svg' alt='next icon' />
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
              activeId === image.id &&
              <div key={ image.id }></div>
            }
          </Thumb>
        ))
        }
      </Thumbnails>
    </StyledImages>
  );
}
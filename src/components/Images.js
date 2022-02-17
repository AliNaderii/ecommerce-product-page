// TOOLS
import { StyledImages, Product, Thumbnails, Thumb, PrevButton, NextButton } from "../styles/Images.styled";

import { useState } from "react";

export default function Images({ images, toggleLightbox }) {
  const productImageSource = images.map(image => image.product);
  const [id, setId] = useState(0);
  const [activeId, setActiveId] = useState();

  const changeSrc = (id) => {
    setActiveId(id);
    setId(id - 1);
  };

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
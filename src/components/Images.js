// TOOLS
import { StyledImages, Product, Thumbnails, Thumb } from "../styles/Images.styled";
import { useState } from "react";

export default function Images({ images, toggleLightbox }) {
  const [product, setProduct] = useState(`${images[0].product}`);
  const [activeId, setActiveId] = useState();

  const changeSrc = (src, id) => {
    setActiveId(id);
    setProduct(src);
  };

  return (
    <StyledImages>
      <Product src={ product } onClick={ toggleLightbox } />
      <Thumbnails>
        { images.map((image, index) => (
          <Thumb key={ image.id }>
            <img
              src={ image.thumb }
              alt="thumbnail"
              key={ index }
              onClick={ () => changeSrc(image.product, image.id) }
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
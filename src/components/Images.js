// TOOLS
import { StyledImages, Product, Thumbnails } from "../styles/Images.styled";

const thumbSource = [
  'image-product-1-thumbnail.jpg',
  'image-product-2-thumbnail.jpg',
  'image-product-3-thumbnail.jpg',
  'image-product-4-thumbnail.jpg',
];

export default function Images() {
  return (
    <StyledImages>
      <Product src="./images/image-product-1.jpg" />
      <Thumbnails>
        { thumbSource.map(thumb => (
          <img src={ `./images/${thumb}` } alt="thumbnail" key={ thumb } />
        )) }
      </Thumbnails>
    </StyledImages>
  );
}
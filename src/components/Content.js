// COMPONENTS
import Images from "./Images";
import Details from "./Details";
// STYLES
import { StyledContent } from '../styles/Content.styled';

export default function Content({ imageSource, toggleLightbox }) {
  return (
    <StyledContent>
      <Images images={ imageSource.images } toggleLightbox={ toggleLightbox } />
      <Details />
    </StyledContent>
  );
}
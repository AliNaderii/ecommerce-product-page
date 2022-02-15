// COMPONENTS
import Images from "./Images";
import Details from "./Details";
// STYLES
import { StyledContent } from '../styles/Content.styled';

export default function Content({ images }) {
  return (
    <StyledContent>
      <Images images={ images } />
      <Details />
    </StyledContent>
  );
}
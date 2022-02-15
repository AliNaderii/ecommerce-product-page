// COMPONENTS
import Images from "./Images";
import Details from "./Details";
// STYLES
import { StyledContent } from '../styles/Content.styled';

export default function Content() {
  return (
    <StyledContent>
      <Images />
      <Details />
    </StyledContent>
  );
}
// GLOBAL STYLES
import GlobalStyle from "./styles/Global";
// STYLED-COMPONENTS THEME-PROVIDER
import { ThemeProvider } from "styled-components";
// STYLES
import { Container } from "./styles/Container";
// COMPONENTS
import Navbar from "./components/Navbar";
import Content from './components/Content';
// CONTEXT HOOK
import { CartContextProvider } from "./context/CartContext";

// THUMB & PRODUCT IMAGES
const imageSource = {
  images: [
    {
      product: './images/image-product-1.jpg',
      thumb: './images/image-product-1-thumbnail.jpg',
      id: 1
    },
    {
      product: './images/image-product-2.jpg',
      thumb: './images/image-product-2-thumbnail.jpg',
      id: 2
    },
    {
      product: './images/image-product-3.jpg',
      thumb: './images/image-product-3-thumbnail.jpg',
      id: 3
    },
    {
      product: './images/image-product-4.jpg',
      thumb: './images/image-product-4-thumbnail.jpg',
      id: 4
    }
  ]
};

// THEME
const theme = {
  'Orange': 'hsl(26, 100%, 55%)',
  'Pale orange': 'hsl(25, 100%, 94%)',
  'Very dark blue': 'hsl(220, 13%, 13%)',
  'Dark grayish blue': 'hsl(219, 9%, 45%)',
  'Grayish blue': 'hsl(220, 14%, 75%)',
  'Light grayish blue': 'hsl(223, 64%, 98%)',
  'White': 'hsl(0, 0%, 100%)',
  'Black': 'rgba(0, 0, 0, 0.75)',
};

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <CartContextProvider>
        <Container>

          <Navbar />

          <Content
            imageSource={ imageSource }
          />

        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;

// GLOBAL STYLES
import GlobalStyle from "./styles/Global";
// STYLED-COMPONENTS THEME-PROVIDER
import { ThemeProvider } from "styled-components";
// STYLES
import { Container } from "./styles/Container";
// COMPONENTS
import Navbar from "./components/Navbar";
import Content from './components/Content';
import Modal from './components/Modal';
import { useState } from "react";
// CONTEXT HOOK
import { CartContextProvider } from "./context/CartContext";

const imageSource = {
  thumbs: [
    'image-product-1-thumbnail.jpg',
    'image-product-2-thumbnail.jpg',
    'image-product-3-thumbnail.jpg',
    'image-product-4-thumbnail.jpg'
  ],
  products: [
    'image-product-1.jpg',
    'image-product-2.jpg',
    'image-product-3.jpg',
    'image-product-4.jpg'
  ]
};

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
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevstate => !prevstate);
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <CartContextProvider>
        <Container>
          <Navbar />
          <Content images={ imageSource } />
          { showModal && <Modal images={ imageSource } toggle={ toggleModal } /> }
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;

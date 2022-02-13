// GLOBAL STYLES
import GlobalStyle from "./styles/Global";
// STYLED-COMPONENTS THEME-PROVIDER
import { ThemeProvider } from "styled-components";
// STYLES
import { Container } from "./styles/Container";

const theme = {
  'Orange': 'hsl(26, 100%, 55%)',
  'Pale orange': 'hsl(25, 100%, 94%)',
  'Very vark blue': 'hsl(220, 13%, 13%)',
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
      <Container>

      </Container>
    </ThemeProvider>
  );
}

export default App;

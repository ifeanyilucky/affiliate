import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Route from './routes';
import './App.css';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

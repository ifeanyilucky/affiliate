import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './foundations/breakpoints';
import { headingStyles } from './components/Heading';
import { CardComponent } from './components/Card';

export default extendTheme(
  { breakpoints },
  globalStyles,
  headingStyles,
  CardComponent
);

import { Box, useStyleConfig } from '@chakra-ui/react';

export default function Card({ children, variant, ...other }) {
  const style = useStyleConfig('Card', { variant });
  return (
    <Box __css={style} {...other}>
      {children}
    </Box>
  );
}

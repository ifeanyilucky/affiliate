import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';

export default function Logo({ sx }) {
  const logo = (
    <Box>
      <Heading
        color='gray.800'
        fontWeight={'bold'}
        sx={{ ...sx }}
        fontSize='3xl'
      >
        Lemox
      </Heading>
    </Box>
  );
  return <RouterLink to='/'>{logo}</RouterLink>;
}

import { Outlet } from 'react-router-dom';
import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import Logo from '../../components/Logo';

export default function AuthLayout() {
  return (
    <Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        display='column'
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Outlet />
      </Flex>
    </Box>
  );
}

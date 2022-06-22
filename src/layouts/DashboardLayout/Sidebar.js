import {
  useColorModeValue,
  CloseButton,
  Flex,
  Link,
  Box,
} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import Iconify from '../../components/Iconify';

const LinkItems = [
  { name: 'Home', icon: 'ant-design:home-filled' },
  { name: 'Trending', icon: 'ant-design:home-filled' },
  { name: 'Explore', icon: 'ant-design:home-filled' },
  { name: 'Favourites', icon: 'ant-design:home-filled' },
  { name: 'Settings', icon: 'ant-design:home-filled' },
];

export const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && <Iconify mr='4' fontSize='16' icon={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

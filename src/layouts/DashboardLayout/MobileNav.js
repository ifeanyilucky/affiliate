import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Heading,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Iconify from '../../components/Iconify';
import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/useAuth';
import AccountPopover from '../../components/AccountPopover';

export const MobileNav = ({ onOpen, ...rest }) => {
  const account = useAuth();
  const Links = ['Dashboard'];
  return (
    <Flex
      px={{ base: 4, md: 10 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      {...rest}
    >
      <Logo />
      <HStack spacing={8} alignItems={'center'}>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </HStack>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <AccountPopover account={account} />
        </Flex>
      </HStack>
    </Flex>
  );
};

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

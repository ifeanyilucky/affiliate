import {
  Menu,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import _ from 'lodash';
import Iconify from './Iconify';
import { PATH } from '../routes/paths';

export default function AccountPopover(props) {
  const { account } = props;
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.clear();
    navigate(PATH.login);
  };
  return (
    <Menu>
      <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
        <HStack>
          <Avatar size={'sm'} src={account.profilePic} />
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems='flex-start'
            spacing='1px'
            ml='2'
          >
            <Text fontSize='sm'>
              {account.firstName} {account.lastName}
            </Text>
            <Text fontSize='xs' color='gray.600'>
              {_.truncate(account.email, { length: 13, omission: '***' })}
            </Text>
          </VStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            <Iconify icon='ep:arrow-down' />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList
        bg={useColorModeValue('white', 'gray.900')}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <MenuItem as={RouterLink} to={PATH.dashboard}>
          Dashboard
        </MenuItem>

        <MenuDivider />
        <MenuItem onClick={signOut}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
}

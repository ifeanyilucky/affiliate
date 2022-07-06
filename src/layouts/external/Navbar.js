import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Logo from '../../components/Logo';
import { PATH } from '../../routes/paths';
import { useAuth, loggedIn } from '../../hooks/useAuth';
import AccountPopover from '../../components/AccountPopover';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const account = useAuth();
  const isLoggedIn = loggedIn();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'left', md: 'start' }}
          alignItems='baseline'
        >
          <Logo />

          <Box ml={5}>
            <Text fontSize='sm'>Affiliate Program</Text>
          </Box>
        </Flex>
        {isLoggedIn ? (
          <AccountPopover account={account} />
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={RouterLink}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              to={PATH.login}
            >
              Login
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'primary.100'}
              as={RouterLink}
              to={PATH.register}
              _hover={{
                bg: 'primary.100',
              }}
            >
              Register
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
}

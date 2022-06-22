import { Outlet } from 'react-router-dom';
import {
  useColorModeValue,
  useDisclosure,
  Drawer,
  Container,
  DrawerContent,
} from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

export default function DashboardLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Container maxWidth='container.lg'>
        <Outlet />
      </Container>
    </>
  );
}

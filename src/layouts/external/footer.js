import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import Iconify from '../../components/Iconify';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const socials = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/Lemox-101380271875067/',
      icon: 'akar-icons:facebook-fill',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/+2V-pZb0MjvkwZGZk',
      icon: 'akar-icons:telegram-fill',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Lemox_co',
      icon: 'entypo-social:twitter-with-circle',
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@lemox',
      icon: 'ant-design:medium-circle-filled',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/lemox_co',
      icon: 'entypo-social:linkedin-with-circle',
    },
  ];
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Lemox Affiliates. All rights reserved</Text>
        <Stack direction={'row'} spacing={4}>
          {socials.map((s) => (
            <SocialButton label={s.name} href={s.link} key={s.name}>
              <Iconify icon={s.icon} width='45px' />
            </SocialButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

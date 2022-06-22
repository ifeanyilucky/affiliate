import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Container,
} from '@chakra-ui/react';
import Iconify from '../Iconify';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack textAlign='center'>
      <Flex
        w={16}
        h={16}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        sx={{ margin: '0 auto' }}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function HowItWorks() {
  return (
    <Container maxWidth='container.lg'>
      <Box sx={{ paddingBottom: '10rem' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <Feature
            icon={<Iconify icon='icon' />}
            title={'Become an Affiliate'}
            text={
              'Choose the right account for you and sign up in under 10 minutes—completely online.'
            }
          />
          <Feature
            icon={<Iconify icon='icon' />}
            title={'Unlimited Donations'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<Iconify icon='icon' />}
            title={'Earn commission'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
        </SimpleGrid>
      </Box>{' '}
    </Container>
  );
}

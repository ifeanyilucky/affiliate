import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Container,
  Heading,
  Image,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import Iconify from '../Iconify';

export default function HowItWorks() {
  return (
    <Container maxW={'container.lg'} py={'10rem'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Build your portfolio as a digital real estate agent</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            While other agents walk around looking for deals, you can close
            deals from the comfort of your home educating people on how and why
            to buy tokenized real estate from Lemox. You earn commissions from
            every purchase made by your downline. Get investors to buy real
            estate on Lemox through your referral link and get a 10% commission
            on each deal. Lemox will give you all the tools and knowledge about
            our services to enable you to invite investors in your unique way.
            We consider every affiliate as a member of our team and we have a
            dedicated team ready to guide and assist you 24/7. Build your
            portfolio as a digital real estate agent.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'3xl'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

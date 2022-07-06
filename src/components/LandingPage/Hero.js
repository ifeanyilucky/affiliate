import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PATH } from '../../routes/paths';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text as={'span'} position={'relative'}>
              Become a Lemox Affiliate
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Become a digital real estate agent with Lemox affiliate program.
            Earn commissions from each deal.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              size={'lg'}
              bg={'#1b1642'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              as={RouterLink}
              to={PATH.register}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/lady-in-work.avif'}
        />
      </Flex>
    </Stack>
  );
}

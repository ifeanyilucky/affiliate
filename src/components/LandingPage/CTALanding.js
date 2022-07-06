import {
  Box,
  Heading,
  Stack,
  Text,
  Container,
  Flex,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PATH } from '../../routes/paths';

export default function CtaLanding() {
  const target = [
    { title: 'Age', desc: '40-55+' },
    { title: 'Household Income', desc: '400k+' },
    { title: 'Awareness', desc: 'Financially conscious' },
    { title: 'Networth', desc: '$500+' },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: 'gray.200', textAlign: 'center' }}>
        <Container maxWidth='container.lg' py='8rem'>
          <Heading mb={12}>Target Audience</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }}>
            {target.map((t) => (
              <Stack spacing={1}>
                <Text fontWeight={600}>{t.title}</Text>
                <Text color={'gray.600'}>{t.desc}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'gray.900' }}>
        <Container maxWidth='container.lg' py={'8rem'}>
          <Box
            textAlign='center'
            sx={{
              paddingBottom: 14,
              alignItems: 'baseline',
              justifyContent: 'center',
              margin: '0 auto',
              color: 'white',
            }}
            maxWidth={'container.md'}
          >
            <Stack spacing={3}>
              <Heading>Become an Affiliate!</Heading>
              <Text>
                Join the new generation of digital real estate agents and grow
                your income stream with Lemox Affiliate.
              </Text>
            </Stack>
          </Box>{' '}
          <SimpleGrid
            columns={{ md: 3, sm: 1 }}
            color='white'
            textAlign='center'
          >
            <Box>
              <Stack spacing={3}>
                <Heading fontSize={{ md: '3xl', sm: '2xl' }}>
                  01:Apply online
                </Heading>
                <Text>
                  Fill out our affiliate application — it's free and only takes
                  1 minute.
                </Text>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={3}>
                <Heading fontSize={{ md: '3xl', sm: '2xl' }}>
                  02: Unique link
                </Heading>
                <Text>
                  We provide you with a unique referral link you can share on
                  social media
                </Text>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={3}>
                <Heading fontSize={{ md: '3xl', sm: '2xl' }}>
                  03: Get paid
                </Heading>
                <Text>
                  Receive a 200% upfront bounty per referral's plan price.
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
          <Box align='center' marginTop={10}>
            <Button
              variant='solid'
              schemeColor='gray.900'
              color='gray.900'
              bg='gray.200'
              p={5}
              as={RouterLink}
              to={PATH.register}
            >
              Apply now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

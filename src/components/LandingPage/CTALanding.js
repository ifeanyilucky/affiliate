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
            minHeight={'200px'}
            textAlign='center'
            sx={{
              alignItems: 'baseline',
              justifyContent: 'center',
              margin: '0 auto',
              color: 'white',
            }}
            maxWidth={'container.md'}
          >
            <Stack spacing={5}>
              <Heading>Become an Affiliate!</Heading>
              <Text>
                Join the new generation of digital real estate agents and grow
                your income stream with RealT referrals.
              </Text>
              <Box>
                <Button
                  variant='solid'
                  schemeColor='gray.900'
                  color='gray.900'
                  bg='gray.200'
                  p={5}
                >
                  Apply now
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

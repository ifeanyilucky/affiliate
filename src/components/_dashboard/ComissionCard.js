import {
  Button,
  Text,
  Heading,
  Box,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import Card from '../Card';
import { fCurrency } from '../../utils/formatNumber';

export default function ComissionCard() {
  const comissionBal = 3000;
  return (
    <Card bg='blue.600' color='gray.300'>
      <Stack spacing={5}>
        <Text>Available Comission Balance</Text>
        <Heading color='gray.100'>{fCurrency(comissionBal)}</Heading>
        <Box as='hr' sx={{ borderColor: 'gray.500' }} />
        <SimpleGrid
          w='100%'
          justifyContent='space-between'
          columns={2}
          fontSize={'small'}
        >
          <Text>Total amount withdrawn</Text>
          <Text>{fCurrency(0)}</Text>
        </SimpleGrid>
        <Button
          variant='solid'
          color='blackAlpha.800'
          bg='gray.100'
          size='md'
          disabled={comissionBal >= 5000 ? false : true}
        >
          Request Withdrawal
        </Button>
        <Text fontSize={'small'}>
          You will be able to request a withdrawal as soon as your balance
          reaches the minimum required amount of $5,000.00.
        </Text>
      </Stack>
    </Card>
  );
}

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

export default function ComissionCard({ balance, amountWithdrawn }) {
  const minimumWithdrawal = 1500;
  return (
    <Card bg='blue.600' color='gray.300'>
      <Stack spacing={5}>
        <Text>Available Comission Balance</Text>
        <Heading color='gray.100'>{fCurrency(balance)}</Heading>
        <Box as='hr' sx={{ borderColor: 'gray.500' }} />
        <SimpleGrid
          w='100%'
          justifyContent='space-between'
          columns={2}
          fontSize={'small'}
        >
          <Text>Total amount withdrawn</Text>
          <Text>{fCurrency(amountWithdrawn)}</Text>
        </SimpleGrid>
        <Button
          variant='solid'
          color='blackAlpha.800'
          bg='gray.100'
          size='md'
          disabled={balance >= minimumWithdrawal ? false : true}
        >
          Request Withdrawal
        </Button>
        <Text fontSize={'small'}>
          You will be able to request a withdrawal as soon as your balance
          reaches the minimum required amount of {fCurrency(minimumWithdrawal)}
        </Text>
      </Stack>
    </Card>
  );
}

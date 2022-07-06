import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Heading,
  CircularProgress,
} from '@chakra-ui/react';
import { fCurrency } from '../../utils/formatNumber';
import Card from '../Card';
import { fToNow } from '../../utils/formatTime';

export default function ReferredUsers({ referredInvestments }) {
  return (
    <Card
      direction='column'
      width='100%'
      overflowX={{ md: 'hidden', sm: 'scroll' }}
    >
      <Heading fontSize='larger' align='center'>
        Your Referrals
      </Heading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Comission</Th>
            </Tr>
          </Thead>
          <Tbody>
            {referredInvestments &&
              referredInvestments.map((row) => {
                const { amount, user, createdAt, _id } = row;
                return (
                  <Tr key={_id}>
                    <Td>{`${user?.firstName} ${user?.lastName}`}</Td>
                    <Td>{fToNow(createdAt)}</Td>
                    <Td>{fCurrency(amount)}</Td>
                    <Td>{fCurrency(amount * 0.1)}</Td>
                  </Tr>
                );
              })}
            {referredInvestments.length < 1 && (
              <Tr>
                <Td align='center'>You currently do not have any refferal</Td>
              </Tr>
            )}
            {!referredInvestments && <CircularProgress />}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

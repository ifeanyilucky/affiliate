import {
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Heading,
  Text,
  useStyleConfig,
  SimpleGrid,
  Stack,
  Button,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReferredUsers, ComissionCard } from '../components/_dashboard';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { getInvestments } from '../redux/actions/data';
import { useAuth } from '../hooks/useAuth';
import { fCurrency, fNumber } from '../utils/formatNumber';

export default function Dashboard() {
  const toast = useToast();
  const dispatch = useDispatch();
  const account = useAuth();
  console.log(account);
  useEffect(() => {
    dispatch(getInvestments());
  }, [dispatch]);
  const { investments } = useSelector((state) => state.data);
  console.log(investments);
  const CopyLink = () => {
    toast({
      description: 'Referral link copied',
      isClosable: true,
      title: 'Copied successfully',
      status: 'success',
      colorScheme: 'green',
      variant: 'top-accent',
      position: 'top',
    });
  };
  return (
    <Page title='Affiliates'>
      <Grid
        templateColumns={'repeat(12, 1fr)'}
        pt={{ base: '40px', md: '40px', xl: '40px' }}
        gap={5}
      >
        <GridItem colSpan={{ md: 8, sm: 12 }} w='100%'>
          <Stack spacing={10}>
            <Text>Hi John, Welcome to Lemox Affiliate dashboard</Text>
            <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={5}>
              <Card
                head={fNumber(3000)}
                desc='Total signup'
                rounded={'3xl'}
                p={5}
                shadow={'2md'}
                borderWidth='1px'
                icon='gridicons:multiple-users'
              />
            </SimpleGrid>
            <InputGroup w={'100%'}>
              <InputLeftElement
                children={<Iconify icon='ant-design:link-outlined' />}
              />
              <Input
                type={'text'}
                value='https://lemox.co/affiliate?ref=67ty874'
                size='lg'
                fontSize={'14px'}
                variant='filled'
              />
              <InputRightElement width='8rem'>
                <Button
                  leftIcon={<Iconify icon='fluent:copy-16-filled' />}
                  variant='solid'
                  onClick={CopyLink}
                >
                  Copy
                </Button>
              </InputRightElement>
            </InputGroup>
            <Box maxW='container.md'>
              <ReferredUsers referredInvestments={investments} />
            </Box>{' '}
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{ md: 4, sm: 12 }}
          gridRowEnd={{ sm: 1, md: 'revert' }}
        >
          <ComissionCard />
        </GridItem>
      </Grid>
    </Page>
  );
}

function Card({ desc, head, icon, variant, ...other }) {
  const Card = useStyleConfig('Card', { variant });
  return (
    <Box
      __css={Card}
      {...other}
      sx={{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        borderColor: 'blue.200',
      }}
    >
      <Stack>
        <Heading fontSize='26px'>{head}</Heading>
        <Text mt={2}>{desc}</Text>
      </Stack>
      <Iconify icon={icon} width='30px' color='#2b6cb0' />
    </Box>
  );
}

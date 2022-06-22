import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useFormik, FormikProvider, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import { signin } from '../redux/actions/auth';
import { PATH } from '../routes/paths';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      dispatch(signin(values, setSubmitting, navigate, toast));
    },
  });
  const { handleSubmit, isSubmitting, setFieldValue } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Logo />
            <Text fontSize={'lg'} color={'gray.600'}>
              Enter your details below
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            width={'sm'}
          >
            <Stack spacing={4}>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='email'
                  onChange={(e) => setFieldValue('email', e.target.value)}
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setFieldValue('password', e.target.value)}
                  />
                  {/* <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement> */}
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting...'
                  size='lg'
                  bg={'blue.400'}
                  color={'white'}
                  isLoading={isSubmitting}
                  type='submit'
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Not a member yet?{' '}
                  <Link color={'blue.400'} as={RouterLink} to={PATH.register}>
                    Create a new Account
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

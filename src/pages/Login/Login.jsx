import { Box, Container, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="x3">Login to your account</Heading>
        <LoginForm />
        Don't have an account?{' '}
        <Link to="/register" style={{ textDecoration: 'underline' }}>
          Register here.
        </Link>
      </Box>
    </Container>
  );
}

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/operactions/login';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="* Enter your email adress"
          width="100%"
          type="email"
          name="email"
        />
      </FormControl>
      <FormControl mt="10px" id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="* Enter your password"
            width="100%"
            type={showPassword ? 'text' : 'password'}
            name="password"
          />
          <InputRightElement width="3rem">
            <Button
              variant="icon"
              h="1.5rem"
              size="sm"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? (
                <ViewOffIcon name="view-off" />
              ) : (
                <ViewIcon name="view" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button mt="20px" type="submit">
        Log In
      </Button>
    </Box>
  );
};

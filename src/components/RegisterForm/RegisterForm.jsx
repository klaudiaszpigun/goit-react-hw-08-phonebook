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
import { register } from '../../redux/operactions/login';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register(userData));
    setUserData({ name: '', email: '', password: '' });
  };

  const handleChange = evt => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto">
      <FormControl id="name" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Enter your username"
          width="100%"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mt="10px" id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="* Enter your email adress"
          width="100%"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
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
            value={userData.password}
            onChange={handleChange}
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
        Register
      </Button>
    </Box>
  );
};

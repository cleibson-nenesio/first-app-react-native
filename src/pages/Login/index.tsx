// React
import React, { useState } from 'react';

// React-Native
import { Button, Container, DefaultInput, FormWrapper, Title } from './styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { navigate } from '../../../RootNavigation';

interface ILoginData {
  login: string;
  password: string;
}

const LoginScreen = () => {
  const [loginData, setLoginData] = useState({} as ILoginData);

  function handleOnChange(value: string, inputName: string) {
    setLoginData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  }

  function handleValidateLogin() {
    if (loginData?.login === 'admin' && loginData?.password === 'admin') {
      navigate('Home');
      setLoginData({} as ILoginData);

      return;
    }

    alert('Login ou senha inválidos');
  }

  return (
    <Container>
      <Title>Login</Title>
      <FormWrapper>
        <DefaultInput
          placeholder='Login'
          value={loginData?.login ?? ''}
          onChangeText={(value: string) => handleOnChange(value, 'login')}
        />
        <DefaultInput
          placeholder='Senha'
          value={loginData?.password ?? ''}
          onChangeText={(value: string) => handleOnChange(value, 'password')}
        />
      </FormWrapper>

      <Button onPress={handleValidateLogin} activeOpacity={0.9}>
        <Text>Entrar</Text>
      </Button>
    </Container>
  );
};

export default LoginScreen;

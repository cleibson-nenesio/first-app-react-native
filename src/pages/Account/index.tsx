// React
import React from 'react';

// React-Native
import { Text, View } from 'react-native';

import { getParams } from '../../../RootNavigation';

const AccountScreen = () => {
  const params = getParams();

  return (
    <View>
      <Text>Account Sceen</Text>
      <Text>Seu nome é: {params.name}</Text>
    </View>
  );
};

export default AccountScreen;

// React
import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// React-Native
import { View, StyleSheet, ScrollView } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Libraries
import { navigate } from '../../../../RootNavigation';

const Actions: React.FC = () => {
  const allButtons = [
    {
      label: 'Entradas',
      icon: 'addfolder',
      path: 'Home',
    },
    {
      label: 'Compras',
      icon: 'tagso',
      path: 'Home',
    },
    {
      label: 'Carteira',
      icon: 'creditcard',
      path: 'Home',
    },
    {
      label: 'Boleto',
      icon: 'barcode',
      path: 'Home',
    },
    {
      label: 'Conta',
      icon: 'user',
      path: 'Account',
      params: {
        name: 'John Doe',
      },
    },
    {
      label: 'Configurações',
      icon: 'setting',
      path: 'Home',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {allButtons?.map((item) => (
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.6}
            onPress={() => navigate(item?.path, item?.params)}
            key={item?.label}
          >
            <View style={styles.areaButton}>
              <AntDesign name={item?.icon as any} size={26} color='#000' />
            </View>

            <Text style={styles.labelButton}>{item?.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    maxHeight: 84,
    marginVertical: 18,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Actions;

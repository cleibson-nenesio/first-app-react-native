// React
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// React-Native
import { View, StyleSheet, ScrollView } from 'react-native';

// Icons
import { AntDesign, Feather } from '@expo/vector-icons';

const Actions: React.FC = () => {
  const allButtons = [
    {
      label: 'Entradas',
      icon: 'addfolder',
    },
    {
      label: 'Compras',
      icon: 'tagso',
    },
    {
      label: 'Carteira',
      icon: 'creditcard',
    },
    {
      label: 'Boleto',
      icon: 'barcode',
    },
    {
      label: 'Conta',
      icon: 'user',
    },
    {
      label: 'Configurações',
      icon: 'setting',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {allButtons?.map((item) => (
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.6}
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

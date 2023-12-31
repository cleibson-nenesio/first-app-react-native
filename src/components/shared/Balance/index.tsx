// React
import React from 'react';

// React-Native
import { Text, View, StyleSheet } from 'react-native';

// Types
import { BalanceProps } from './types';

const Balance: React.FC<BalanceProps> = ({ balance, expenses }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>

        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>

        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,

    borderRadius: 4,

    paddingTop: 22,
    paddingBottom: 22,

    zIndex: 99,
  },
  item: {},
  itemTitle: {
    fontSize: 20,
    color: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  currencySymbol: {
    color: '#DADADA',
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71', 
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});

export default Balance;

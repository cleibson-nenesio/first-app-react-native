// React
import React, { useState } from 'react';

// React-Native
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Types
import { MovementItemProps } from './types';

const MovementItem: React.FC<MovementItemProps> = ({
  label,
  date,
  type,
  value,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => setIsVisible((prevState) => !prevState)}
    >
      <View style={type === 'income' ? styles.income : styles.outcome} />
      <View style={styles.details}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>

      {!isVisible && <View style={styles.hiddenValue}></View>}

      {isVisible && (
        <Text
          style={type === 'income' ? styles.incomeValue : styles.outcomeValue}
        >
          R$ {type === 'income' ? '' : '-'}
          {value}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafbfc',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginEnd: 10,
    marginStart: 10,
    overflow: 'hidden',
  },
  details: {
    gap: 3,
  },
  date: {
    fontSize: 13,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  incomeValue: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  outcomeValue: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  income: {
    position: 'absolute',
    width: 5,
    height: 80,
    left: 0,
    backgroundColor: '#2ecc71',
  },
  outcome: {
    position: 'absolute',
    width: 5,
    height: 80,
    left: 0,
    backgroundColor: '#e74c3c',
  },
  hiddenValue: {
    height: 15,
    width: 80,
    backgroundColor: '#dadada',
    borderRadius: 8,
  },
});

export default MovementItem;

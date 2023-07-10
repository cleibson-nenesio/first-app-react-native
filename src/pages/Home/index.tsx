// React-Native
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import Header from '../../components/global/Header';
import Balance from '../../components/shared/Balance';
import MovementItem from '../../components/shared/MovementItem';
import Actions from '../../components/shared/Actions';

// Types
import { BalanceMovements } from '../../types';

const bankMovements: BalanceMovements[] = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '300,90',
    date: '17/03/2023',
    type: 'outcome',
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/03/2023',
    type: 'income',
  },
  {
    id: 3,
    label: 'Macbook Pro',
    value: '3.500,00',
    date: '25/04/2023',
    type: 'outcome',
  },
  {
    id: 4,
    label: 'Viagem Disney',
    value: '13.456,00',
    date: '01/04/2023',
    type: 'outcome',
  },
  {
    id: 5,
    label: 'Viagem México',
    value: '20.000,00',
    date: '01/04/2023',
    type: 'outcome',
  },
  {
    id: 6,
    label: 'Dividendos',
    value: '200.000,00',
    date: '01/04/2023',
    type: 'income',
  },
  {
    id: 7,
    label: 'Salário',
    value: '1.000.000,00',
    date: '01/04/2023',
    type: 'income',
  },
];

function Home() {
  return (
    <View style={styles.container}>
      <Header userName='Cleito N.' />

      <Balance balance='7.457,59' expenses='-4.102,82' />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        data={bankMovements}
        style={styles.movements}
        keyExtractor={(item) => item?.id?.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovementItem
            date={item?.date}
            label={item?.label}
            type={item?.type}
            value={item?.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  movements: {
    margin: 14,
  },
});

export default Home;

export interface BalanceMovements {
  id: number;
  label: string;
  value: string;
  date: string;
  type: 'income' | 'outcome';
}

import styles from '../../css/GroupsDashboard/GroupExpenseCardList.module.css';
import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import GroupExpenseCard from './GroupExpenseCard';

type GroupExpenseCardListProps = {
  owedAmount: number;
  lentAmount: number;
  currency?: string;
};
export default function GroupExpenseCardList({
  owedAmount,
  lentAmount,
  currency = '₹',
}: GroupExpenseCardListProps) {
  return (
    <div className={styles['group-expenses-card-list']}>
      <GroupExpenseCard
        title={<Text variant={TextVariant.Caption}>You owe</Text>}
        description={
          <Text
            variant={TextVariant.Heading}
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            {currency}
            {owedAmount}
          </Text>
        }
        style={{ width: '50%' }}
      />
      <GroupExpenseCard
        title={<Text variant={TextVariant.Caption}>You are owed</Text>}
        description={
          <Text
            variant={TextVariant.Heading}
            style={{ color: 'green', fontWeight: 'bold' }}
          >
            {currency}
            {lentAmount}
          </Text>
        }
        style={{ width: '50%' }}
      />
    </div>
  );
}

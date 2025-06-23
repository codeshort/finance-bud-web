import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import styles from '../../css/ExpenseInfo/CurrentSplitInfo.module.css';

type CurrenSplitInfoProps = {
  totalBalance: number; // Total balance of the user
  owedAmount: number; // Amount owed by the user
  lentAmount: number; // Amount lent by the user
  currency?: string; // Optional currency, default is 'INR'
};
export default function CurrentSplitInfo({
  totalBalance,
  owedAmount,
  lentAmount,
  currency = 'Rs.',
}: CurrenSplitInfoProps) {
  return (
    <div className={styles['current-split-info-wrapper']}>
      <div>
        <Text variant={TextVariant.Body}>Total Balance </Text>
        <Text variant={TextVariant.SubHeading} style={{ fontWeight: 'bold' }}>
          {currency} {totalBalance.toFixed(2)}
        </Text>
      </div>
      <div className={styles['current-split-info-list']}>
        <div>
          <Text variant={TextVariant.Body} style={{ color: '#22C55E' }}>
            You are owed
          </Text>
          <Text
            variant={TextVariant.Body}
            style={{ color: '#22C55E', fontWeight: 'bold' }}
          >
            {currency} {lentAmount.toFixed(2)}
          </Text>
        </div>
        <div>
          <Text variant={TextVariant.Body} style={{ color: '#EF4444' }}>
            You owe
          </Text>
          <Text
            variant={TextVariant.Body}
            style={{ color: '#EF4444', fontWeight: 'bold' }}
          >
            {currency} {owedAmount.toFixed(2)}
          </Text>
        </div>
      </div>
    </div>
  );
}

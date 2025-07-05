import { useCallback } from 'react';
import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import styles from '../../css/RecentActivitySection/ActivityBar.module.css';
import { DEFAULT_PROFILE_IMAGE } from '../../configs/default/placeholder';

export type ActivityBarProps = {
  name: string;
  settled: boolean;
  amount: number;
  owes?: boolean;
  currency?: string;
};

export default function ActivityBar({
  name,
  settled,
  owes,
  amount,
  currency = '₹',
}: ActivityBarProps) {
  const getCurrentStatusText = useCallback(() => {
    if (settled) {
      return (
        <Text variant={TextVariant.SubHeading} style={{ color: 'gray' }}>
          Settled up
        </Text>
      );
    } else if (owes) {
      return (
        <Text variant={TextVariant.SubHeading} style={{ color: 'green' }}>
          Owes you {currency} {amount}
        </Text>
      );
    } else {
      return (
        <Text variant={TextVariant.SubHeading} style={{ color: 'red' }}>
          You owe {currency}
          {amount}
        </Text>
      );
    }
  }, [settled, owes, amount, currency]);
  return (
    <div className={styles['activity-bar-container']}>
      <div className={styles['activity-bar-profile-image-container']}>
        <img
          src={DEFAULT_PROFILE_IMAGE}
          alt="profile"
          className={styles['activity-bar-profile-image']}
        />
        <div>
          <Text variant={TextVariant.SubHeading}>{name}</Text>
          {getCurrentStatusText()}
        </div>
      </div>

      {!settled && (
        <Button variant={ButtonVariant.PRIMARY} onClick={() => {}}>
          Settle up
        </Button>
      )}
    </div>
  );
}

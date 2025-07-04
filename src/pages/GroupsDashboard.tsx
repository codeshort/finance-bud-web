import Button from '../components/Button/Button';
import GroupExpenseCardList from '../components/GroupsDashboard/GroupExpenseCardList';
import GroupsList from '../components/GroupsDashboard/GroupsList';
import AppLayout from '../components/Root/AppLayout';
import Text from '../components/Text/Text';
import styles from '../css/GroupsDashboard/GroupsDashboardPage.module.css';
import { ButtonVariant } from '../types/components/Button/ButtonTypes';
import { TextVariant } from '../types/components/Text/TextTypes';

export default function GroupDashboard() {
  return (
    <AppLayout>
      <div className={styles['group-dashboard-container']}>
        <GroupExpenseCardList owedAmount={100} lentAmount={200} />

        <div className={styles['group-dashboard-groups-header']}>
          <Text variant={TextVariant.Heading}>Groups</Text>
          <div className={styles['group-dashboard-groups-action-buttons']}>
            <Button
              variant={ButtonVariant.SECONDARY}
              onClick={() => {}}
              style={{ borderColor: '#333333' }}
            >
              Filter
            </Button>
            <Button
              variant={ButtonVariant.SECONDARY}
              onClick={() => {}}
              style={{ borderColor: '#333333' }}
            >
              Export
            </Button>
            <Button variant={ButtonVariant.PRIMARY} onClick={() => {}}>
              Create Group
            </Button>
          </div>
        </div>
        <GroupsList />
      </div>
    </AppLayout>
  );
}

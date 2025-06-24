import CurrentSplitInfo from '../components/ExpenseInfo/CurrentSplitInfo';
import AppLayout from '../components/Root/AppLayout';
import styles from '../css/HomeDashboard/HomeDashboard.module.css';
import ButtonsRow from '../components/ButtonsRow/ButtonsRow';
import RecentActivitySection from '../components/RecentActivitySection.tsx/RecentActivitySection';

export default function HomeDashboard() {
  return (
    <>
      <AppLayout>
        <div className={styles['home-dashboard-wrapper']}>
          <CurrentSplitInfo
            totalBalance={1000.0}
            owedAmount={200.0}
            lentAmount={300.0}
          />
          <ButtonsRow />
          <RecentActivitySection />
        </div>
      </AppLayout>
    </>
  );
}

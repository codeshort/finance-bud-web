import ButtonCard from '../components/Button/ButtonCard';
import AddFriendIcon from '../assets/add-user.png'; // Adjust the path as necessary
import CurrentSplitInfo from '../components/ExpenseInfo/CurrentSplitInfo';
import AppLayout from '../components/Root/AppLayout';
import styles from '../css/GroupDashboard/GroupDashboard.module.css'; // Assuming you have an icon for adding friends

export default function GroupDashboard() {
  return (
    <>
      <AppLayout>
        <div className={styles['group-dashboard-wrapper']}>
          <CurrentSplitInfo
            totalBalance={1000.0}
            owedAmount={200.0}
            lentAmount={300.0}
          />
          <ButtonCard
            icon={AddFriendIcon}
            onClick={() => {}}
            label="Add Friend"
          />
        </div>
      </AppLayout>
    </>
  );
}

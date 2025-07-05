import InviteFormCard from '../components/Invite/InviteFormCard';
import RecentInvitesCard from '../components/Invite/RecentInvitesCard';
import AppLayout from '../components/Root/AppLayout';
import { mockFriendsInviteList } from '../configs/default/placeholder';
import styles from '../css/Invite/InviteFriendsPage.module.css';

export default function InviteFriends() {
  return (
    <AppLayout>
      <div className={styles['invite-friends-container']}>
        <InviteFormCard />
        <RecentInvitesCard invites={mockFriendsInviteList} />
      </div>
    </AppLayout>
  );
}

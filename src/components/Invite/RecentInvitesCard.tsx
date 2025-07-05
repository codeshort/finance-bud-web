import {
  FriendInviteStatus,
  type FriendInvite,
} from '../../types/components/Invites/FriendInvites';
import { TextVariant } from '../../types/components/Text/TextTypes';
import styles from '../../css/Invite/RecentInvites.module.css';
import Text from '../Text/Text';
import Accepted from '../../assets/checked.png';
import Rejected from '../../assets/remove.png';
import Pending from '../../assets/clock.png';

type RecentInvitesCardProps = {
  invites: FriendInvite[];
};
export default function RecentInvitesCard({ invites }: RecentInvitesCardProps) {
  return (
    <div className={styles['recent-invites-card-container']}>
      <Text variant={TextVariant.Heading}>Recent Invites</Text>
      <div className={styles['recent-invites-list']}>
        {invites.map((invite) => (
          <>
            <div className={styles['recent-invite-item']} key={invite.id}>
              <Text variant={TextVariant.Body}>{invite.email}</Text>
              <Text variant={TextVariant.Body}>{invite.createdAt}</Text>
              <div className={styles['recent-invite-item-status-container']}>
                <img
                  src={
                    invite.status === FriendInviteStatus.PENDING
                      ? Pending
                      : invite.status === FriendInviteStatus.ACCEPTED
                        ? Accepted
                        : Rejected
                  }
                  alt="profile"
                  className={styles['recent-invite-item-status-icon']}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

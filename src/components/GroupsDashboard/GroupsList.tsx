import { DEFAULT_PROFILE_IMAGE } from '../../configs/default/placeholder';
import styles from '../../css/GroupsDashboard/GroupsList.module.css';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import { TextVariant } from '../../types/components/Text/TextTypes';
import Button from '../Button/Button';
import Text from '../Text/Text';

const mockGroupData = [
  {
    id: '1',
    profile: DEFAULT_PROFILE_IMAGE,
    groupName: 'Weekend trip',
    status: 'you owe',
    amount: '₹200',
    lastActivity: '2 days ago',
  },
  {
    id: '1',
    profile: DEFAULT_PROFILE_IMAGE,
    groupName: 'Dinner group',
    status: 'owes you',
    amount: '₹500',
    lastActivity: '3 days ago',
  },
  {
    id: '1',
    profile: DEFAULT_PROFILE_IMAGE,
    groupName: 'Apartment',
    status: 'settled',
    amount: 0,
    lastActivity: '5 days ago',
  },
  {
    id: '1',
    profile: DEFAULT_PROFILE_IMAGE,
    groupName: 'Movie Night',
    status: 'you owe',
    amount: '₹800',
    lastActivity: '1 week ago',
  },
];
export default function GroupsList() {
  return (
    <div className={styles['group-list-container']}>
      <table className={styles['groups-table']}>
        <thead>
          <tr>
            <th>
              <Text variant={TextVariant.Caption}>Group</Text>
            </th>
            <th>
              <Text variant={TextVariant.Caption}>Status</Text>
            </th>
            <th>
              <Text variant={TextVariant.Caption}>Amount</Text>
            </th>
            <th>
              <Text variant={TextVariant.Caption}>Last Activity</Text>
            </th>
            <th>
              <Text variant={TextVariant.Caption} style={{ textAlign: 'end' }}>
                Actions
              </Text>
            </th>
          </tr>
        </thead>
        {mockGroupData.map((group) => {
          const isSettled = group.status === 'settled';
          const owesYou = group.status === 'owes you';
          const fontColor = isSettled ? 'gray' : owesYou ? 'green' : 'red';
          return (
            <tbody key={group.id}>
              <tr>
                <td>
                  <div className={styles['group-row-title']}>
                    <img
                      src={group.profile}
                      alt="group-icon"
                      className={styles['group-row-image']}
                    />
                    <Text variant={TextVariant.SubHeading}>
                      {group.groupName}
                    </Text>
                  </div>
                </td>
                <td>
                  <Text variant={TextVariant.Body} style={{ color: fontColor }}>
                    {group.status}
                  </Text>
                </td>
                <td>
                  <Text variant={TextVariant.Body} style={{ color: fontColor }}>
                    {!isSettled ? group.amount : '-'}
                  </Text>
                </td>
                <td>
                  <div className={styles['group-row-activity']}>
                    <span className={styles['group-row-activity-icon']}>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </span>
                    <Text variant={TextVariant.Caption}>
                      {group.lastActivity}
                    </Text>
                  </div>
                </td>
                <td>
                  <div className={styles['group-row-actions']}>
                    <Button
                      onClick={() => {}}
                      variant={ButtonVariant.SECONDARY}
                    >
                      <i className="fa fa-ellipsis-h"></i>
                    </Button>
                    <Button onClick={() => {}} variant={ButtonVariant.PRIMARY}>
                      View Details
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

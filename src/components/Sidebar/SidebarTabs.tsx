import Text from '../Text/Text';
import styles from '../../css/Sidebar/SidebarTabs.module.css';
import useNavigationManager from '../../hooks/Navigation/useNavigationManager';
import { TextVariant } from '../../types/components/Text/TextTypes';

export type SidebarTabProps = {
  label: string;
  linkToPath: string;
  icon: string;
};
export default function SidebarTabs({
  label,
  linkToPath,
  icon,
}: SidebarTabProps) {
  const { navigateTo } = useNavigationManager();
  function handleTabClick() {
    navigateTo(linkToPath);
  }
  if (!label) {
    throw new Error('Label is required for SidebarTab');
  }
  return (
    <div className={styles['sidebar-tab-container']} onClick={handleTabClick}>
      <span>
        <img src={icon} alt={label} className={styles['sidebar-icon']} />
      </span>
      <Text
        variant={TextVariant.SubHeading}
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Text>
    </div>
  );
}

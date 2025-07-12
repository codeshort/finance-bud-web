import SidebarTabs from './SidebarTabs';
import HomeIcon from '../../assets/home.png';
import styles from '../../css/Sidebar/Sidebar.module.css';
import { NavigationEndpoints } from '../../configs/navigation/NavigationEndpoints';

export default function Sidebar() {
  return (
    <div className={styles['sidebar-wrapper']}>
      <SidebarTabs
        label={'Home'}
        linkToPath={NavigationEndpoints.HOME_DASHBOARD}
        icon={HomeIcon}
      />
      <SidebarTabs
        label={'Groups'}
        linkToPath={NavigationEndpoints.GROUPS_DASHBOARD}
        icon={HomeIcon}
      />
      <SidebarTabs
        label={'Add'}
        linkToPath={NavigationEndpoints.HOME_DASHBOARD}
        icon={HomeIcon}
      />
      <SidebarTabs
        label={'Profile'}
        linkToPath={NavigationEndpoints.HOME_DASHBOARD}
        icon={HomeIcon}
      />
    </div>
  );
}

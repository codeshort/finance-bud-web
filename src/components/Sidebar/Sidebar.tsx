import SidebarTabs from './SidebarTabs';
import HomeIcon from '../../assets/home.png';
import styles from '../../css/Sidebar/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles['sidebar-wrapper']}>
      <SidebarTabs
        label={'Home'}
        linkToPath="/home-dashboard"
        icon={HomeIcon}
      />
      <SidebarTabs
        label={'Groups'}
        linkToPath="/groups-dashboard"
        icon={HomeIcon}
      />
      <SidebarTabs label={'Add'} linkToPath="/home" icon={HomeIcon} />
      <SidebarTabs label={'Profile'} linkToPath="/home" icon={HomeIcon} />
    </div>
  );
}

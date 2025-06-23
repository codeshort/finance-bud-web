import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../css/AppLayout/AppLayout.module.css';

export type AppLayoutProps = {
  children: React.ReactNode;
};
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      <div className={styles['app-layout-content']}>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

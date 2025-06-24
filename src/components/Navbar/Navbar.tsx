import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import bellIcon from '../../assets/bell.svg'; // Import as a string (URL)
import searchIcon from '../../assets/search.svg'; // Import as a string (URL)
import styles from '../../css/Navbar/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles['navbar-wrapper']}>
      <Text variant={TextVariant.Heading}>Finance Bud</Text>
      <div className={styles['navbar-right']}>
        <span>
          <img
            src={bellIcon}
            alt="Notifications"
            className={styles['navbar-icons']}
          />
        </span>
        <span>
          <img
            src={searchIcon}
            alt="Search"
            className={styles['navbar-icons']}
          />
        </span>
      </div>
    </div>
  );
}

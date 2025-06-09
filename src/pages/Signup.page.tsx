import styles from '../css/Signup/Signup.page.module.css';
import SignupLoginRightSection from '../components/Signup/SignupLoginRightSection';
import SignupLeftSection from '../components/Signup/SignupLeftSection';
import Text from '../components/Text/Text';
import { TextVariant } from '../components-types/Text/TextTypes';
import SignupLoginNavbar from '../components/Signup/SIgnupLoginNavbar';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className={styles['signup-page-wrapper']}>
        <SignupLoginNavbar
          buttonText="Log In"
          clickHandler={handleLoginClick}
        />
        <div className={styles['signup-main-container']}>
          <div className={styles['left-section']}>
            <SignupLeftSection />
          </div>
          <div className={styles['right-section']}>
            <SignupLoginRightSection />
          </div>
        </div>
        <div className={styles.footer}>
          <Text variant={TextVariant.Caption} style={{ textAlign: 'center' }}>
            © 2024 FinanceBud. All rights reserved.
          </Text>
        </div>
      </div>
    </>
  );
}

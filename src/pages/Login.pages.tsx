import { TextVariant } from '../types/components/Text/TextTypes';
import LoginLeftSection from '../components/Login/LoginLeftSection';
import SignupLoginNavbar from '../components/Signup/SIgnupLoginNavbar';
import SignupLoginRightSection from '../components/Signup/SignupLoginRightSection';
import Text from '../components/Text/Text';
import styles from '../css/Login/Login.page.module.css';
import useNavigationManager from '../hooks/Navigation/useNavigationManager';

export default function Login() {
  const { navigateTo } = useNavigationManager();
  const handleSignupClick = () => {
    navigateTo('/signup');
  };
  return (
    <>
      <div className={styles['login-page-wrapper']}>
        <SignupLoginNavbar
          buttonText="Sign Up"
          clickHandler={handleSignupClick}
        />
        <div className={styles['login-main-container']}>
          <div className={styles['login-left-section']}>
            <LoginLeftSection />
          </div>
          <div className={styles['login-right-section']}>
            <SignupLoginRightSection />
          </div>
        </div>
        <div className={styles['login-footer']}>
          <Text variant={TextVariant.Caption} style={{ textAlign: 'center' }}>
            © 2024 FinanceBud. All rights reserved.
          </Text>
        </div>
      </div>
    </>
  );
}

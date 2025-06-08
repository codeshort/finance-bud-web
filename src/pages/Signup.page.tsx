import styles from '../css/Signup/Signup.page.module.css';
import SignupLoginRightSection from '../components/Signup/SignupLoginRightSection';
import SignupLeftSection from '../components/Signup/SignupLeftSection';
import Text from '../components/Text/Text';
import { TextVariant } from '../components-types/Text/TextTypes';
import SignupLoginNavbar from '../components/Signup/SIgnupLoginNavbar';

export default function Signup() {
  return (
    <>
      <div className={styles['signup-page-wrapper']}>
        <SignupLoginNavbar buttonText="Log In" />
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

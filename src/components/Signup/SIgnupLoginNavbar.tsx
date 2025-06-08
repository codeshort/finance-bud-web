import styles from '../../css/Signup/SignupLoginNavbar.module.css';
import logo from '../../assets/budget.png';
import Button from '../Button/Button';
import { ButtonVariant } from '../../components-types/Button/ButtonTypes';
import Text from '../Text/Text';
import { TextVariant } from '../../components-types/Text/TextTypes';
interface SignupLoginNavbarProps {
  buttonText: string;
}

export default function SignupLoginNavbar({
  buttonText,
}: SignupLoginNavbarProps) {
  return (
    <div className={styles.navbar}>
      <div className={styles['logo-container']}>
        <img className={styles['navbar-logo']} src={logo} alt="company-logo" />
        <Text variant={TextVariant.SubHeading}>Pay Buddy</Text>
      </div>
      <Button
        variant={ButtonVariant.PRIMARY}
        onClick={() => {
          console.log('clicked');
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}

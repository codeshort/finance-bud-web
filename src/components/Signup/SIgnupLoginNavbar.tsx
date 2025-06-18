import styles from '../../css/Signup/SignupLoginNavbar.module.css';
import logo from '../../assets/budget.png';
import Button from '../Button/Button';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import Text from '../Text/Text';
import { TextVariant } from '../../types/components/Text/TextTypes';
interface SignupLoginNavbarProps {
  buttonText: string;
  clickHandler: () => void;
}

export default function SignupLoginNavbar({
  buttonText,
  clickHandler,
}: SignupLoginNavbarProps) {
  return (
    <div className={styles.navbar}>
      <div className={styles['logo-container']}>
        <img className={styles['navbar-logo']} src={logo} alt="company-logo" />
        <Text variant={TextVariant.SubHeading}>Pay Buddy</Text>
      </div>
      <Button variant={ButtonVariant.PRIMARY} onClick={clickHandler}>
        {buttonText}
      </Button>
    </div>
  );
}

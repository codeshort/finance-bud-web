import Button from '../../components/Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { ButtonVariant } from '../../components-types/Button/ButtonTypes';
import { InputTypes } from '../../components-types/Input/InputTypes';
import { TextVariant } from '../../components-types/Text/TextTypes';
import ORDivider from '../ORDivider/ORDivider';
import styles from '../../css/Login/LoginLeftSection.module.css';

export default function LoginLeftSection() {
  return (
    <div className={styles['login-form-container']}>
      <div className={styles['login-form-heading']}>
        <Text variant={TextVariant.Heading}>Welcome back!</Text>
        <Text variant={TextVariant.SubHeading}>
          Split expenses with friends
        </Text>
      </div>
      <div className={styles['login-form-fields']}>
        <Input
          type={InputTypes.EMAIL}
          label="Email"
          placeholder="Enter your email"
        ></Input>
        <Input
          type={InputTypes.PASSWORD}
          label="Password"
          placeholder="Enter your password"
        ></Input>
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={() => {
            console.log('clicked');
          }}
          style={{ width: '100%' }}
        >
          Log In
        </Button>
        <ORDivider />
        <Button
          variant={ButtonVariant.SECONDARY}
          onClick={() => {
            console.log('clicked secondary');
          }}
          style={{ width: '100%' }}
        >
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

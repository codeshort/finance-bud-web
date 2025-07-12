import Button from '../../components/Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import { InputTypes } from '../../types/components/Input/InputTypes';
import { TextVariant } from '../../types/components/Text/TextTypes';
import ORDivider from '../ORDivider/ORDivider';
import styles from '../../css/Login/LoginLeftSection.module.css';
import { loginUser } from '../../api/UserApi';
import useNavigationManager from '../../hooks/Navigation/useNavigationManager';
import { NavigationEndpoints } from '../../configs/navigation/NavigationEndpoints';
import { useState } from 'react';

export default function LoginLeftSection() {
  const { navigateTo } = useNavigationManager();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    const formaData = new FormData(event.target as HTMLFormElement);
    const email = formaData.get('email') as string;
    const password = formaData.get('password') as string;
    if (email && password) {
      try {
        await loginUser({ email, password });
        navigateTo(NavigationEndpoints.HOME_DASHBOARD);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoggingIn(false);
      }
    } else {
      console.log('email or password is not valid');
    }
  }
  return (
    <div className={styles['login-form-container']}>
      <div className={styles['login-form-heading']}>
        <Text variant={TextVariant.Heading}>Welcome back!</Text>
        <Text variant={TextVariant.SubHeading}>
          Split expenses with friends
        </Text>
      </div>
      <form onSubmit={handleLogin} className={styles['login-form-fields']}>
        <Input
          type={InputTypes.EMAIL}
          label="Email"
          placeholder="Enter your email"
          name="email"
        ></Input>
        <Input
          type={InputTypes.PASSWORD}
          label="Password"
          placeholder="Enter your password"
          name="password"
        ></Input>
        <Button
          type="submit"
          variant={ButtonVariant.PRIMARY}
          onClick={() => {
            console.log('clicked');
          }}
          style={{ width: '100%' }}
          isPending={isLoggingIn}
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
      </form>
    </div>
  );
}

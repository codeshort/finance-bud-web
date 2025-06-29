import Button from '../../components/Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import { InputTypes } from '../../types/components/Input/InputTypes';
import { TextVariant } from '../../types/components/Text/TextTypes';
import ORDivider from '../ORDivider/ORDivider';
import styles from '../../css/Signup/SignupLeftSection.module.css';
import type { FormEvent } from 'react';
import { addUser } from '../../api/UserApi';

export default function SignupLeftSection() {
  function handleSignupFormSubmit(event: FormEvent<HTMLFormElement>){
     event.preventDefault();
     const formData = new FormData(event.target as HTMLFormElement);
     const name = formData.get("name") as string;
     const email = formData.get('email') as string;
     const password = formData.get('password') as string;
     const confirmPassword = formData.get('confirmPassword') as string;
     if(password !== confirmPassword){
      console.error("Passwords do not match");
      return;
     }

     addUser({name, email, password});
     
     
  }

  return (
    <div className={styles['signup-form-container']}>
      <div className={styles['signup-form-heading']}>
        <Text variant={TextVariant.Heading}>Sign Up</Text>
        <Text variant={TextVariant.SubHeading}>
          Split expenses with friends
        </Text>
      </div>
      <form className={styles['signup-form-fields']} onSubmit={handleSignupFormSubmit}>
        <Input
          type={InputTypes.TEXT}
          label="Name"
          placeholder="Enter Your full name"
          name="name"
        ></Input>
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
        <Input
          type={InputTypes.PASSWORD}
          label="Confirm Password"
          placeholder="Verify your password"
          name="confirmPassword"
        ></Input>
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={() => {
            console.log('clicked');
          }}
          style={{ width: '100%' }}
          type="submit"
        >
          Signup
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

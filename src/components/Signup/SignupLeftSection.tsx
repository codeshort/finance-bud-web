import Button from '../../components/Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';
import { InputTypes } from '../../types/components/Input/InputTypes';
import { TextVariant } from '../../types/components/Text/TextTypes';
import ORDivider from '../ORDivider/ORDivider';
import styles from '../../css/Signup/SignupLeftSection.module.css';

export default function SignupLeftSection() {
  return (
    <div className={styles['signup-form-container']}>
      <div className={styles['signup-form-heading']}>
        <Text variant={TextVariant.Heading}>Sign Up</Text>
        <Text variant={TextVariant.SubHeading}>
          Split expenses with friends
        </Text>
      </div>
      <div className={styles['signup-form-fields']}>
        <Input
          type={InputTypes.TEXT}
          label="Name"
          placeholder="Enter Your full name"
        ></Input>
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
        <Input
          type={InputTypes.PASSWORD}
          label="Confirm Password"
          placeholder="Verify your password"
        ></Input>
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={() => {
            console.log('clicked');
          }}
          style={{ width: '100%' }}
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
      </div>
    </div>
  );
}

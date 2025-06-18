import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import styles from '../../css/Signup/SignupLoginRightSection.module.css';
import InfoCard from '../Infocard/InfoCard';

export default function SignupLoginRightSection() {
  return (
    <div className={styles['right-section-container']}>
      <div className="page-header">
        <Text variant={TextVariant.Heading}>Simplify Shared Expenses</Text>
        <Text variant={TextVariant.SubHeading}>
          Split expenses with friends easily
        </Text>
      </div>
      <div className="middle-container">
        <div className={styles['image-container']}>
          <img src="https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        </div>
      </div>
      <div className={styles['page-footer']}>
        <InfoCard
          cardHeading="Track Expenses"
          cardContent="Keep track of shared expenses and split bills effortlessly"
        />
        <InfoCard
          cardHeading="Instant Settlement"
          cardContent="Settle up with friends quickly and securely"
        />
      </div>
    </div>
  );
}

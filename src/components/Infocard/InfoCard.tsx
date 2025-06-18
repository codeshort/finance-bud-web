import { TextVariant } from '../../types/components/Text/TextTypes';
import styles from '../../css/Infocard/InfoCard.module.css';
import Text from '../Text/Text';

interface InfoCardProps {
  cardHeading: string;
  cardContent: string;
}
export default function InfoCard({ cardHeading, cardContent }: InfoCardProps) {
  return (
    <div className={`${styles['info-card-container']}`}>
      <Text variant={TextVariant.Body}>{cardHeading}</Text>
      <Text variant={TextVariant.Caption}>{cardContent}</Text>
    </div>
  );
}

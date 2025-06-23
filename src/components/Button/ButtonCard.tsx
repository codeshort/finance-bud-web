import IconButton from './IconButton';
import styles from '../../css/Button/ButtonCard.module.css';
import Text from '../Text/Text';
import { TextVariant } from '../../types/components/Text/TextTypes';
export type ButtonCardProps = {
  icon: string;
  onClick: () => void;
  label: string;
};

export default function ButtonCard({ icon, onClick, label }: ButtonCardProps) {
  return (
    <div className={styles['buttoncard-wrapper']}>
      <IconButton icon={icon} onClick={onClick} />
      <Text variant={TextVariant.SubHeading}>{label}</Text>
    </div>
  );
}

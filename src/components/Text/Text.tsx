import { TextVariant } from '../../components-types/Text/TextTypes';
import styles from '../../css/Text/Text.module.css';

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant: TextVariant;
  style?: React.CSSProperties;
};
export default function Text({
  children,
  variant,
  style,
  ...props
}: TextProps) {
  return (
    <div
      className={`${styles.text} ${styles[variant]}`}
      {...props}
      style={style}
    >
      {children}
    </div>
  );
}

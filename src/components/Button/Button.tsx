import styles from '../../css/Button/Button.module.css';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant: ButtonVariant;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // rest of the props that a normal button would accept

export default function Button({
  children,
  onClick,
  variant,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      {...props}
      style={style}
    >
      {children}
    </button>
  );
}

import styles from '../../css/Button/CircularButton.module.css';
import type { ReactNode } from 'react';

type CircularButtonProps = {
  children: ReactNode;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CircularButton({
  children,
  onClick,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}: CircularButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.circularButton} ${styles[size]} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

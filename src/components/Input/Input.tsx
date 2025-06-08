import { InputTypes } from '../../components-types/Input/InputTypes';
import styles from '../../css/Input/Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  label: string;
  placeholder: string;
  type: InputTypes;
};

export default function Input({
  children,
  label,
  placeholder,
  type,
  ...props
}: InputProps) {
  return (
    <div className={styles['input-container']}>
      <label>{label}</label>
      <input
        type={type}
        className={`${styles[type]}`}
        placeholder={placeholder}
        {...props}
      />
      {children}
    </div>
  );
}

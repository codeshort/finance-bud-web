import styles from '../../css/Button/IconButton.module.css';

type IconButtonProps = {
  icon: string;
  onClick: () => void;
};
export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button className={styles['icon-button-wrapper']} onClick={onClick}>
      <img
        src={icon}
        alt="icon"
        onClick={onClick}
        className={styles['icon-button-image']}
      />
    </button>
  );
}

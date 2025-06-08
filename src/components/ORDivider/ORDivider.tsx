import styles from '../../css/ORDivider/ORDivider.module.css';

export default function ORDivider() {
  return (
    <div className={styles['or-divider']}>
      <hr className={styles['or-divider-line']} />
      <span className={styles['or-divider-text']}>OR</span>
      <hr className={styles['or-divider-line']} />
    </div>
  );
}

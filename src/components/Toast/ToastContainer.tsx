import styles from '../../css/Toast/toastContainer.module.css';
import { TextVariant } from '../../types/components/Text/TextTypes';
import Text from '../Text/Text';
import { useToastNotificationContext } from '../../context/ToastContext';

export default function ToastContainer() {
  const { removeTopToast, getToastNotificationsList } =
    useToastNotificationContext();

  function closeToastHandler() {
    removeTopToast();
  }

  const toastList = getToastNotificationsList();
  return (
    <div className={styles['toast-container']}>
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className={`${styles['toast']} ${styles[toast.type]}`}
        >
          <Text
            variant={TextVariant.Body}
            style={{ color: 'white', textAlign: 'center' }}
          >
            {toast.message}
          </Text>
          <button
            onClick={() => closeToastHandler()}
            className={styles['toast-close-button']}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

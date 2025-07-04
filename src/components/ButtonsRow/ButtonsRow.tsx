import ButtonCard from '../Button/ButtonCard';
import AddFriendIcon from '../../assets/add-user.png';
import SettleUpIcon from '../../assets/settle.svg';
import AddExpenseIcon from '../../assets/expense.svg';
import styles from '../../css/ButtonsRow/ButtonsRow.module.css';

export default function ButtonsRow() {
  return (
    <div className={styles['buttons-row-container']}>
      <ButtonCard icon={SettleUpIcon} onClick={() => {}} label="Add Friend" />
      <ButtonCard icon={AddFriendIcon} onClick={() => {}} label="Settle up" />
      <ButtonCard
        icon={AddExpenseIcon}
        onClick={() => {}}
        label="Add Expense"
      />
    </div>
  );
}

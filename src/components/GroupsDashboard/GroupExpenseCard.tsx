import React from 'react';
import styles from '../../css/GroupsDashboard/GroupExpenseCard.module.css';

type GroupExpenseCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  style?: React.CSSProperties;
};

export default function GroupExpenseCard({
  title,
  description,
  style,
}: GroupExpenseCardProps) {
  return (
    <div className={styles['group-expense-card']} style={style}>
      {title}
      {description}
    </div>
  );
}

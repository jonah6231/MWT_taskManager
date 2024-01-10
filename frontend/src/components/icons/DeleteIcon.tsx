import { HTMLAttributes } from 'react';
import styles from './DeleteIcon.module.css';

type DeleteIconProps = HTMLAttributes<HTMLSpanElement>;

const DeleteIcon: React.FC<DeleteIconProps> = props => {
  return (
    <span
      {...props}
      title='Delete'
      className={`material-symbols-outlined ${styles.deleteIcon}`}
    >
      delete
    </span>
  );
};

export default DeleteIcon;

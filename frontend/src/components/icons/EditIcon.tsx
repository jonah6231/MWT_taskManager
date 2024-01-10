import { HTMLAttributes } from 'react';
import styles from './EditIcon.module.css';

type EditIconProps = HTMLAttributes<HTMLSpanElement>;

const EditIcon: React.FC<EditIconProps> = props => {
  return (
    <span
      {...props}
      title='Edit'
      className={`material-symbols-outlined ${styles.editIcon}`}
    >
      edit
    </span>
  );
};

export default EditIcon;

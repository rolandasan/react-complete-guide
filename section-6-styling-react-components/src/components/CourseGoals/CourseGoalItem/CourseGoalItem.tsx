import React from 'react';

import styles from './CourseGoalItem.module.css';

interface CourseGoalItemProps {
    id: string;
    onDelete: (goalId: string) => void;
}

export const CourseGoalItem: React.FC<CourseGoalItemProps> = (props) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <li className={styles.goalItem} onClick={deleteHandler}>
            {props.children}
        </li>
    );
};

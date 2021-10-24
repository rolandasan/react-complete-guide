import React from 'react';

import './CourseGoalList.css';
import { CourseGoalItem } from '../CourseGoalItem/CourseGoalItem';
import { CourseGoal } from '../../../model/CourseGoal';

interface CourseGoalListProps {
    items: CourseGoal[];
    onDeleteItem: (goalId: string) => void;
}

export const CourseGoalList: React.FC<CourseGoalListProps> = (props) => {
    return (
        <ul className='goal-list'>
            {props.items.map((goal) => (
                <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

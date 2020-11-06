import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListStatsState } from '../helpers';

function TodoListStats() {
    const {
        totalNum, 
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);
    return (
        <div>
            <ul>
                <li>Total items: {totalNum}</li>
                <li>Items completed: {totalCompletedNum}</li>
                <li>Items not completed: {totalUncompletedNum}</li>
                <li>percentCompleted: {formattedPercentCompleted}</li>
            </ul>

        </div>
    );
};

export default TodoListStats;
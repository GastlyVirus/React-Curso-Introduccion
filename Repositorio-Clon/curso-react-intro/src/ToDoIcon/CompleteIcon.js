import React from 'react';
import { ToDoIcon } from './index';

function CompleteIcon({ completed, onComplete }) {
    return (
        <ToDoIcon
            type="check"
            color={completed ? '#98ca3f' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }
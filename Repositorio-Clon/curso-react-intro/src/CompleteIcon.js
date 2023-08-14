import React from 'react';
import { ToDoIcon } from './ToDoIcon';

function CompleteIcon({ completed }) {
    return (
        <ToDoIcon
            type="check"
            color={completed ? 'green' : 'gray'}
        />
    )
}

export { CompleteIcon }
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

import {filteredTodoListState} from '../helpers';

function TodoList() {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <div>
            <TodoListFilters />
            <TodoItemCreator />
            <TodoListStats  />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    )
}

export default TodoList;
import React, {FC} from 'react';
import {IToDO} from '../types/types'

interface IToDoListProps {
    todos: IToDO[]
}

const ToDoList:FC<IToDoListProps> = ({todos}) => {
    return (
        <div>
            {todos.map(todo=>
                <div className='appToDoList' key={todo.id}>
                    <p>User ID - {todo.userId}</p>
                    <p>Title:{todo.title}</p>
                    <input type={"checkbox"} defaultChecked={todo.completed}/>
                </div>
            )}
        </div>
    );
};

export default ToDoList;
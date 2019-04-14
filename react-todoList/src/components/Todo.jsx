import React, {Component} from "react";


const Todo = ({todo,onDelete}) => (
    <li 
        onClick={() => onDelete(todo.id) }
        id={todo.id}
    >
        {todo.value}
    </li>
)
export default Todo;
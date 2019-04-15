import React from "react";
import Todo from "./Todo";
const TodoList = ({todos,onDelete}) => (
    <ul className="list-ul">
        {todos.map((todo,index) => (
            <Todo key={index} {...todo} onClick={()=>{onDelete(todo.id)}} />
        ))}

    </ul>
)
export default TodoList;

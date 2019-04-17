import React from "react";
import Todo from "./Todo";
import {useTodo} from "../hooks/useTodo";
import {deleteTodo} from "../actions/index"

const useDelete = () => {
    const {todos, dispatch} = useTodo();
    let onDelete = (id) => {
        return () => {
            dispatch(deleteTodo(id));
        }
    }
    return [todos,onDelete];
}

const TodoList = () => {
    const [todos, onDelete] = useDelete();
    
    return (
        <ul className="list-ul">
            {todos.map((todo,index) => (
                <Todo key={index} {...todo} onClick={onDelete(todo.id)} />
            ))}
        </ul>
    )
}

export default TodoList;
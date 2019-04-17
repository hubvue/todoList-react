import {
    ADD_TODO,
    DELETE_TODO
} from "../constants/actionTypes";

const addTodo = (todoValue) => ({
    type: ADD_TODO,
    todoValue,
})

const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    todoId,
})

export {
    addTodo,
    deleteTodo,
}
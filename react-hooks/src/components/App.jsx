import React from "react";
import "../styles/index.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {TodoProvider} from "../hooks/useTodo";
const App = () => (
    <div className="wrapper">
        <TodoProvider>
            <AddTodo/>
            <TodoList/>
        </TodoProvider>
    </div>
)
export default App;
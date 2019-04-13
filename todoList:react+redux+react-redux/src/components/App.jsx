import React from "react";
import "../styles/index.css";
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from "./AddTodo";
const App = () => (
    <div className="wrapper">
        <AddTodo/>
        <VisibleTodoList/>
    </div>
)
export default App;
import React from "react";
import "../styles/index.css";
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodoContainer from "../containers/VisibleAddTodo";


const App = () => (
    <div className="wrapper">
        <AddTodoContainer/>
        <VisibleTodoList/>
    </div>
)
export default App;
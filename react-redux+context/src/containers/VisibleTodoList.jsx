import React from "react";
import {deleteTodo} from "../actions/index";
import TodoList from "../components/TodoList";
import { StoreContext } from "../listener"

const VisibleTodoList = ()=> (
    <StoreContext.Consumer>
        {value =>(
            <TodoList 
                todos={value.state}
                onDelete={id=>{value.dispatch(deleteTodo(id))}}
            />
        )}
    </StoreContext.Consumer>
);



export default VisibleTodoList;
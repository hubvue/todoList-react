import React from "react";
import {StoreContext} from "../listener"
import {addTodo} from "../actions/index";
import AddTodo from "../components/AddTodo";
const addHandle = (dispatch,value) => {
    dispatch(addTodo({
        value,
        id:Date.now()
    }))
}
const AddTodoContainer = ()=>(
    <StoreContext.Consumer>
        {value=>(
            <AddTodo addHandle={inputValue => {addHandle(value.dispatch,inputValue)}}/>
        )}
    </StoreContext.Consumer>
);

export default AddTodoContainer;
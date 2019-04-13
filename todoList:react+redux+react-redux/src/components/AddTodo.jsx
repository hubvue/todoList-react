import React from "react";
import  {connect} from "react-redux";
import {addTodo} from "../actions/index";

let AddTodo = ({dispatch}) => {
    let inputRef = React.createRef();
    const submitHandle = (e) => {
        e.preventDefault();
        
        if(!inputRef.current.value.trim()){
            return;
        }
        console.log(inputRef.current.value)
        dispatch(addTodo({
            value: inputRef.current.value,
            id:Date.now()
        }));
        inputRef.current.value = "";
    }
    return (
        <form 
            className="top-form"
            onSubmit={submitHandle}
        >
            <input type="text" ref={inputRef} className="top-input" placeholder="请输入信息"/>
            <input type="submit" value="addTodo" className="top-btn_add"/>
        </form>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
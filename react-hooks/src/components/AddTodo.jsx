import React, {useRef} from "react";
import {useTodo} from "../hooks/useTodo";
import {addTodo} from "../actions/index";

const useSubmitHandle = () => {
    const {dispatch} = useTodo();
    const inputRef = useRef();
    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            id: Date.now(),
            value: inputRef.current.value
        }));
        inputRef.current.value = "";
    }
    return [inputRef,submitHandle];
}

const AddTodo = () => {
    const [inputRef, submitHandle] = useSubmitHandle();
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
export default AddTodo;
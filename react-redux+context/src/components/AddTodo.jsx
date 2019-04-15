import React from "react";

let AddTodo = ({addHandle}) => {
    let inputRef = React.createRef();

    const submitHandle = (e) => {
        e.preventDefault();
        if(!inputRef.current.value.trim()){
            return;
        }
        addHandle(inputRef.current.value)
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

export default AddTodo;
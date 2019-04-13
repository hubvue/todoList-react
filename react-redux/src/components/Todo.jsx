import React from "react";

const Todo = ({value,onClick}) => (
    <li
        onClick={onClick}
    >{value}</li>
);

export default Todo;
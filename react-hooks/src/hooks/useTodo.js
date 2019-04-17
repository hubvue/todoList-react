import React, { useReducer,createContext,useContext } from "react";
import reducer from "../reudcers/index";

const initialState = [
    {
        id:1,
        value: 'HelloWorld'
    }
]
const TodoContext =  createContext('default');

const TodoProvider = ({children}) => {
    let [todos, dispatch] = useReducer(reducer, initialState);
    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
} 

const useTodo = () => {
    const contextValue = useContext(TodoContext);
    return contextValue;
}

export {
    useTodo,
    TodoProvider
};
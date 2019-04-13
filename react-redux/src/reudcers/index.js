import {
    ADD_TODO,
    DELETE_TODO
} from "../constants/actionTypes"

const initialState = [
    {
        id:1,
        value: 'HelloWorld'
    }
]

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,action.todoValue];
        case DELETE_TODO:
            return state.filter((value,index) => value.id !== action.todoId);
        default:
            return state;
    }
}

export default reducer;
import React, {Component} from "react";

import Todo from "./Todo";
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    static getDerivedStateFromProps(nextProp,prevState){
        return {
            todos:[...nextProp.todos],
            onDelete: nextProp.onDelete,
        }
    }
    
    render(){
        return(
            <ul className="list-ul">
                {this.state.todos.map((todo,index) => (
                    <Todo key={index} todo={todo}  onDelete={this.state.onDelete} />
                ))}
            </ul>
        )
    }

}

export default TodoList;
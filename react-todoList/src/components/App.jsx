import React, {Component} from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "../styles/index.css";

class App extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            todos:[{
                id:0,
                value: "Hello React"
            }]
        };
        this.deleteHandle = this.deleteHandle.bind(this);

    }
    addTodo(todo){
        this.setState({
            todos:[...this.state.todos,todo]
        },)

    }
    deleteHandle(id){
        let todos = this.state.todos.filter((todo,index) => todo.id !== id );
        this.setState({
            todos,
        })
    }
    render(){
        return (
            <div className="wrapper">
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} onDelete={this.deleteHandle}/>
            </div>
        )
    }
}
export default App;


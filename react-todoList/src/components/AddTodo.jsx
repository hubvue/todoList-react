import React, {Component} from "react";


class AddTodo extends Component {
    constructor(props){
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
        this.inputRef = React.createRef();
    }
    submitHandle(e){
        e.preventDefault();
        if(!this.inputRef.current.value.trim()){
            return;
        }
        this.props.addTodo({
            id: Date.now(),
            value: this.inputRef.current.value
        });
        this.inputRef.current.value = "";
    }
    render(){
        return (
            <form 
                onSubmit = {this.submitHandle}
                className = "top-form"
            >
                <input type="text" ref={this.inputRef} className="top-input"/>
                <input type="submit" value="Add" className="top-btn_add"/>
            </form>
        )
    }
}
export default AddTodo;
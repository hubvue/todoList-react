import {connect} from "react-redux";
import {deleteTodo} from "../actions/index";
import TodoList from "../components/TodoList";

const mapStateToProps = state => {
    return {
        todos: state,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteTodo(id))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;
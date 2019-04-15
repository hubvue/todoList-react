import  {connect} from "react-redux";
import {addTodo} from "../actions/index";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({
    
})
const mapDispatchToProps = dispatch => ({
    addHandle: value => {
        dispatch(addTodo({
            value,
            id:Date.now()
        }))
    }
})

const AddTodoContainer = connect(mapStateToProps,mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
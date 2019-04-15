import {createStore} from "redux";
import reducer from "../reudcers/index";

const store = createStore(reducer);

export default store;
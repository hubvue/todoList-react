import React from "react";
import {Provider} from "react-redux";
import {render} from "react-dom";
import App from "./components/App";
import store from "./store/index";
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#react-root")
)
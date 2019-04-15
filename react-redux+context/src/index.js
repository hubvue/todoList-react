import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import store from "./store/index";
import { StoreContext } from "./listener";

const renderApp = () => {
    render(
        <StoreContext.Provider 
            value={{
                state:  store.getState(),
                dispatch: store.dispatch
            }}
        >
            <App />
        </StoreContext.Provider>,
        document.querySelector("#react-root")
    )
}
renderApp();
store.subscribe(()=>{
    renderApp();
});


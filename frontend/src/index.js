import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import App from './Components/App';
import Reducers from './Reducers';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector("#root")
)


import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import App from './Components/App';
import Reducers from './Reducers';
import setAuthToken from './Utils/setAuthToken';

const store = createStore(Reducers, applyMiddleware(thunk));

//Checks token in localstorage and set if it is there.
setAuthToken(store);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector("#root")
)


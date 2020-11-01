import { createStore,applyMiddleware,compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, compose(applyMiddleware(ReduxThunk),composeEnhancers()) );

export default store;


import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer, taskDetailsReducer } from "./todoReducers";

const reducer = combineReducers({
  taskList: taskReducer,
  taskDetails: taskDetailsReducer,
});

const middleware = [thunk];

const initialState = {
  taskList: {
    tasks: localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : [],
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

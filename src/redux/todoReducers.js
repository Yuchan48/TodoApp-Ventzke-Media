import * as actionTypes from "./todoConstants";

export const taskReducer = (state = { tasks: [], task: [] }, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case actionTypes.TODO_DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((x) => x.id !== action.payload),
      };

    case actionTypes.TODO_ADD_TASK_FAIL:
      return { ...state, error: "", tasks: [] };

    case actionTypes.TODO_EDIT_TASK:
      const item = action.payload;
      item.id = parseInt(item.id);
      const editTask = state.tasks.find((x) => x.id === item.id);
      if (item.task) editTask.task = item.task;
      if (item.done) editTask.done = item.done;
      return {
        ...state,
        tasks: state.tasks.map((x) => (x.id === editTask.id ? editTask : x)),
      };

    default:
      return state;
  }
};

export const taskDetailsReducer = (state = { task: [] }, action) => {
  switch (action.type) {
    case actionTypes.TODO_TASK_DETAILS:
      let items = localStorage.getItem("taskList");
      return {
        ...state,
        task: JSON.parse(items).filter(
          (x) => x.id === parseInt(action.payload)
        ),
      };

    default:
      return state;
  }
};

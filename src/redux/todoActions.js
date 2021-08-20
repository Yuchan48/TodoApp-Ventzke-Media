import * as actionTypes from "./todoConstants";

export const addToList = (id, task, created_on) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_ADD_TASK,
    payload: { task: task, id: id, done: "NO", created_on: created_on },
  });

  localStorage.setItem("taskList", JSON.stringify(getState().taskList.tasks));
};

export const removeFromList = (taskId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_DELETE_TASK,
    payload: taskId,
  });
  localStorage.setItem("taskList", JSON.stringify(getState().taskList.tasks));
};

export const detailsTask = (taskId) => (dispatch) => {
  dispatch({
    type: actionTypes.TODO_TASK_DETAILS,
    payload: taskId,
  });
};

export const editList = (taskId, task, done) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_EDIT_TASK,
    payload: { id: taskId, task: task, done: done },
  });
  localStorage.setItem("taskList", JSON.stringify(getState().taskList.tasks));
};

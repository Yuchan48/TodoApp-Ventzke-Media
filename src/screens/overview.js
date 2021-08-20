import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../redux/todoActions";

function Overview(props) {
  const taskList = useSelector((state) => state.taskList);
  const { tasks } = taskList;

  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please input a new task.");
    } else {
      const now = new Date().toString().slice(0, 21);
      let taskId = 0;
      if (tasks.length === 0) {
        taskId = 1;
      } else {
        taskId = tasks[tasks.length - 1].id + 1;
      }
      dispatch(addToList(taskId, task, now));
    }
  };

  const deleteHandler = (taskId) => {
    if (window.confirm(`Are you sure to delete the task?`)) {
      dispatch(removeFromList(taskId));
    }
  };

  return (
    <div className="screen">
      <form onSubmit={submitHandler}>
        <div className="title">
          <h4>Create a task</h4>
          <i className="fas fa-folder-plus"></i>
        </div>

        <div className="form">
          <label htmlFor="task">New Task</label>
          <div className="row">
            <input
              placeholder="new task"
              name="task"
              id="task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button type="submit">Create</button>
          </div>
        </div>
      </form>

      <div className="overview">
        <div className="title">
          <h4>Overview</h4>
          <i className="fas fa-list-alt"></i>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TASK</th>
              <th>DONE</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.task}</td>
                  <td>{task.done}</td>
                  <td>
                    <button
                      onClick={() => props.history.push(`/details/${task.id}`)}
                    >
                      Details
                    </button>
                    <button onClick={() => deleteHandler(task.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Empty</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Overview;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsTask, editList } from "../redux/todoActions";

function Details(props) {
  const taskId = props.match.params.id;

  const taskDetails = useSelector((state) => state.taskDetails);
  const { task } = taskDetails;

  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState("");
  const [editState, setEditState] = useState("");

  useEffect(() => {
    dispatch(detailsTask(taskId));
  }, [dispatch, taskId]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!editTask && !editState) {
      alert("Please provide information to update");
    } else {
      dispatch(editList(taskId, editTask, editState));
      //window.location.reload();
      dispatch(detailsTask(taskId));
    }
  };

  return (
    <div className="screen">
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
            <th>CREATED ON</th>
          </tr>
        </thead>

        <tbody>
          {task.length > 0 ? (
            <tr key={task[0].id}>
              <td>{task[0].id}</td>
              <td>{task[0].task}</td>
              <td>{task[0].done}</td>
              <td>{task[0].created_on}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3">Loading</td>
            </tr>
          )}
        </tbody>
      </table>

      <form onSubmit={submitHandler}>
        <div className="title">
          <h4>Create a task</h4>
          <i className="fas fa-folder-plus"></i>
        </div>

        <div className="form_details">
          <label htmlFor="task">New Task</label>

          <input
            placeholder="new task"
            name="task"
            id="task"
            onChange={(e) => setEditTask(e.target.value)}
            value={editTask}
          />

          <div>
            <select
              name="done"
              id="done"
              onChange={(e) => setEditState(e.target.value)}
            >
              <option value="" hidden>
                YES / NO
              </option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <button type="submit">Edit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Details;

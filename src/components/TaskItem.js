import React, { Component } from 'react';
import '../styles/TaskItem.css';

class TaskItem extends Component {
  state = {
    isEditing: false,
    taskName: this.props.task.taskName,
    labels: this.props.task.labels,
    newLabel: '',
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleTaskNameChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleLabelChange = (e) => {
    this.setState({ newLabel: e.target.value });
  };

  addLabel = () => {
    if (this.state.newLabel) {
      this.setState((prevState) => ({
        labels: [...prevState.labels, prevState.newLabel],
        newLabel: '',
      }));
    }
  };

  saveEdit = () => {
    const { taskName, labels } = this.state;
    const { index, editTask } = this.props;
    editTask({ taskName, labels }, index);
    this.toggleEdit();
  };

  handleDelete = () => {
    const { index, deleteTask } = this.props;
    deleteTask(index);
  };

  render() {
    const { task } = this.props;
    const { isEditing, taskName, labels, newLabel } = this.state;

    return (
      <div className="task-item">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={taskName}
              onChange={this.handleTaskNameChange}
              className="edit-input"
            />
            <div className="label-input">
              <input
                type="text"
                value={newLabel}
                onChange={this.handleLabelChange}
                placeholder="Add label"
                className="input-label"
              />
              <button type="button" onClick={this.addLabel} className="add-label-btn">
                Add Label
              </button>
            </div>
            <button onClick={this.saveEdit} className="save-btn">
              Save
            </button>
            <button onClick={this.handleDelete} className="delete-btn">
              Delete
            </button>
          </div>
        ) : (
          <div>
            <h3>{task.taskName}</h3>
            <div className="labels">
              {task.labels.map((label, index) => (
                <span key={index} className="label">
                  {label}
                </span>
              ))}
            </div>
            <button onClick={this.toggleEdit} className="edit-btn">
              Edit
            </button>
            <button onClick={this.handleDelete} className="delete-btn">
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TaskItem;


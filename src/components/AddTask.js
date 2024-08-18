import React, { Component } from 'react';
import '../styles/AddTask.css';

class AddTask extends Component {
  state = {
    taskName: '',
    labels: [],
    newLabel: '',
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, labels } = this.state;
    if (taskName) {
      this.props.addTask({ taskName, labels });
      this.setState({ taskName: '', labels: [] });
    }
  };

  render() {
    return (
      <div className="add-task-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.handleTaskNameChange}
            placeholder="Enter task"
            className="input-task"
          />
          <div className="label-input">
            <input
              type="text"
              value={this.state.newLabel}
              onChange={this.handleLabelChange}
              placeholder="Add a label"
              className="input-label"
            />
            <div className='button-styling'>
            <button
              type="button"
              onClick={this.addLabel}
              className="add-label-btn"
            >
              Add Label
            </button>
          
          <button type="submit" className="add-task-btn">
            Add Task
          </button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;


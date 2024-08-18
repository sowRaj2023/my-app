import React, { Component } from 'react';
import '../styles/TaskFilter.css';

class TaskFilter extends Component {
  state = {
    filterText: '',
  };

  handleFilterChange = (e) => {
    this.setState({ filterText: e.target.value });
    this.props.filterTasks(e.target.value);
  };

  render() {
    return (
      <div className="task-filter">
        <input
          type="text"
          value={this.state.filterText}
          onChange={this.handleFilterChange}
          placeholder="Filter by label"
          className="filter-input"
        />
      </div>
    );
  }
}

export default TaskFilter;


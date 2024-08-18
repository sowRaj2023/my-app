import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
    filterLabel: '',
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks });
  }

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  editTask = (editedTask, index) => {
    const tasks = [...this.state.tasks];
    tasks[index] = editedTask;
    this.setState({ tasks });
  };

  deleteTask = (index) => {
    const tasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks });
  };

  filterTasks = (filterLabel) => {
    this.setState({ filterLabel });
  };

  getFilteredTasks = () => {
    const { tasks, filterLabel } = this.state;
    return filterLabel
      ? tasks.filter((task) => task.labels.some(label => label.toLowerCase().includes(filterLabel.toLowerCase())))
      : tasks;
  };

  render() {
    const filteredTasks = this.getFilteredTasks();

    return (
      <div className="app-container">
        <h1>To-Do List with Custom Labels</h1>
        <AddTask addTask={this.addTask} />
        <TaskFilter filterTasks={this.filterTasks} />
        <TaskList
          tasks={filteredTasks}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;






import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, editTask, deleteTask }) => (
  <div className="task-list">
    {tasks.length > 0 ? (
      tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))
    ) : (
      <p>No tasks available.</p>
    )}
  </div>
);

export default TaskList;


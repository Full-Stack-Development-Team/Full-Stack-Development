import React from 'react';
import TaskCard from './TaskCard';

export default function Column({ column, tasks }) {
  return (
    <div className="column">
      <div className="column-title">
        <span>{column.title}</span>
        <span className="badge badge-low">{tasks.length}</span>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
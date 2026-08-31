import React from 'react';
import TaskCard from './TaskCard';

export default function Column({ column, tasks, onDropTask }) {
  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow dropping
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    onDropTask(Number(taskId), column.key);
  };

  return (
    <div 
      className="column" 
      onDragOver={handleDragOver} 
      onDrop={handleDrop}
    >
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
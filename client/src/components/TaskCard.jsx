import React from 'react';

export default function TaskCard({ task }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  return (
    <div 
      className="task-card" 
      draggable 
      onDragStart={handleDragStart}
    >
      <div className="task-title">{task.title}</div>
      <div className="task-desc">{task.description}</div>
      <div className="task-footer">
        <span className={`badge badge-${task.priority}`}>
          {task.priority}
        </span>
      </div>
    </div>
  );
}
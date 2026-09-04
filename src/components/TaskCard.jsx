import React from 'react';

export default function TaskCard({ task, onEdit, onDelete }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  return (
    <div 
      className="task-card" 
      draggable 
      onDragStart={handleDragStart}
    >
      <div className="task-header-row">
        <div className="task-title">{task.title}</div>
        <div className="task-actions">
          <button className="icon-btn" onClick={() => onEdit(task)}>update</button>
          <button className="icon-btn" onClick={() => onDelete(task.id)}>delete</button>
        </div>
      </div>
      <div className="task-desc">{task.description}</div>
      <div className="task-footer">
        <span className={`badge badge-${task.priority}`}>
          {task.priority}
        </span>
      </div>
    </div>
  );
}
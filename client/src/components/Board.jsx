import React, { useState } from 'react';
import TaskModal from './TaskModal';
import Column from './Column';

export default function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup Database ER Diagram', description: 'Collaborate with Maduka on table schemas.', status: 'todo', priority: 'high' },
    { id: 2, title: 'Build React Dashboard', description: 'Create task card components and layout.', status: 'doing', priority: 'medium' },
    { id: 3, title: 'Initialize Repository', description: 'Push initial folder structures to GitHub.', status: 'done', priority: 'low' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'todo', title: 'To Do' },
    { key: 'doing', title: 'In Progress' },
    { key: 'done', title: 'Completed' },
  ];

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <div>
          <h1>Team Collaboration Board</h1>
          <p>University Full Stack Development Project</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          + Add New Task
        </button>
      </div>

      <div className="columns-wrapper">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.key);
          return (
            <Column 
              key={col.key} 
              column={col} 
              tasks={colTasks} 
            />
          );
        })}
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddTask={handleAddTask} 
      />
    </div>
  );
}
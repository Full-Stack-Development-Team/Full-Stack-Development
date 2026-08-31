import React, { useState } from 'react';
import TaskModal from './TaskModal';
import Column from './Column';

export default function Board({ onLogout }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup Database ER Diagram', description: 'Define table schemas and relationships.', status: 'todo', priority: 'high' },
    { id: 2, title: 'Build React Dashboard', description: 'Create task card components and layout.', status: 'doing', priority: 'medium' },
    { id: 3, title: 'Initialize Repository', description: 'Push initial folder structures to GitHub.', status: 'done', priority: 'low' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const columns = [
    { key: 'todo', title: 'To Do' },
    { key: 'doing', title: 'In Progress' },
    { key: 'done', title: 'Completed' },
  ];

  const handleSaveTask = (newTask) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...newTask, id: t.id, status: t.status } : t));
      setEditingTask(null);
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleDropTask = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <div>
          <h1>Team Collaboration Board</h1>
          <p>University Full Stack Development Project</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-primary" onClick={() => { setEditingTask(null); setIsModalOpen(true); }}>
            + Add New Task
          </button>
          <button className="btn-cancel" onClick={onLogout}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="columns-wrapper">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.key);
          return (
            <Column 
              key={col.key} 
              column={col} 
              tasks={colTasks} 
              onDropTask={handleDropTask}
              onEditTask={(task) => { setEditingTask(task); setIsModalOpen(true); }}
              onDeleteTask={handleDeleteTask}
            />
          );
        })}
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setEditingTask(null); }} 
        onAddTask={handleSaveTask} 
        initialData={editingTask}
      />
    </div>
  );
}
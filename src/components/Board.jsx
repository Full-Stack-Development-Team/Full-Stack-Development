import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskModal from './TaskModal';
import Column from './Column';

export default function Board({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  const token = localStorage.getItem('token');

  const columns = [
    { key: 'todo', title: 'To Do' },
    { key: 'doing', title: 'In Progress' },
    { key: 'done', title: 'Completed' },
  ];

  // Fetch tasks from backend database on load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(response.data);
      } catch (err) {
        console.error('Error fetching tasks', err);
      }
    };
    if (token) fetchTasks();
  }, [token]);

  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) {
        // Update existing task via API
        const response = await axios.put(`http://localhost:5000/api/tasks/${editingTask._id || editingTask.id}`, taskData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(tasks.map(t => (t._id === editingTask._id || t.id === editingTask.id) ? response.data : t));
        setEditingTask(null);
      } else {
        // Create new task via API
        const response = await axios.post('http://localhost:5000/api/tasks', taskData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks([...tasks, response.data]);
      }
    } catch (err) {
      console.error('Error saving task', err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(tasks.filter(t => t._id !== taskId && t.id !== taskId));
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  const handleDropTask = async (taskId, newStatus) => {
    try {
      const taskToUpdate = tasks.find(t => t._id === taskId || t.id === taskId);
      if (!taskToUpdate) return;

      const response = await axios.put(`http://localhost:5000/api/tasks/${taskToUpdate._id || taskToUpdate.id}`, 
        { ...taskToUpdate, status: newStatus }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTasks(tasks.map(task => 
        (task._id === taskId || task.id === taskId) ? response.data : task
      ));
    } catch (err) {
      console.error('Error updating task status', err);
    }
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
import React from 'react';
import TaskCard from './TaskCard';

export default function Column({ title, tasks }) {
  return (
    <div style={{ background: '#ebecf0', borderRadius: '8px', width: '300px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#172b4d', fontSize: '16px' }}>{title}</h3>
      <div style={{ flexGrow: 1, minHeight: '250px' }}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import Column from './Column';

export default function Board() {
  const [tasks] = useState([
    { id: '1', status: 'To Do', title: 'Design Database Schema', description: 'Create ER diagrams for users and tasks.' },
    { id: '2', status: 'Doing', title: 'Setup React Frontend', description: 'Scaffold project with Vite and components.' },
    { id: '3', status: 'Done', title: 'Initialize Repository', description: 'Create GitHub team repo and branch strategy.' }
  ]);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#172b4d' }}>CollabBoard (Milestone 1)</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', alignItems: 'flex-start' }}>
        <Column title="To Do" tasks={tasks.filter(t => t.status === 'To Do')} />
        <Column title="Doing" tasks={tasks.filter(t => t.status === 'Doing')} />
        <Column title="Done" tasks={tasks.filter(t => t.status === 'Done')} />
      </div>
    </div>
  );
}
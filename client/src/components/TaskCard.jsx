import React from 'react';

export default function TaskCard({ task }) {
  return (
    <div style={{ background: '#f4f5f7', padding: '12px', margin: '10px 0', borderRadius: '6px', border: '1px solid #dfe1e6', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
      <h4 style={{ margin: '0 0 6px 0', color: '#172b4d' }}>{task.title}</h4>
      <p style={{ margin: 0, color: '#5e6c84', fontSize: '14px' }}>{task.description}</p>
    </div>
  );
}
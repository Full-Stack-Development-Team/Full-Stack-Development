import React from 'react';

export default function Board() {
  // Sample mockup tasks to visualize the styling
  const tasks = [
    { id: 1, title: 'Setup Database ER Diagram', description: 'Collaborate with Maduka on table schemas.', status: 'todo', priority: 'high' },
    { id: 2, title: 'Build React Dashboard', description: 'Create task card components and layout.', status: 'doing', priority: 'medium' },
    { id: 3, title: 'Initialize Repository', description: 'Push initial folder structures to GitHub.', status: 'done', priority: 'low' },
  ];

  const columns = [
    { key: 'todo', title: 'To Do' },
    { key: 'doing', title: 'In Progress' },
    { key: 'done', title: 'Completed' },
  ];

  return (
    <div className="board-container">
      <div className="board-header">
        <h1>Team Collaboration Board</h1>
        <p>University Full Stack Development Project</p>
      </div>

      <div className="columns-wrapper">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.key);
          return (
            <div className="column" key={col.key}>
              <div className="column-title">
                <span>{col.title}</span>
                <span className="badge badge-low">{colTasks.length}</span>
              </div>

              {colTasks.map(task => (
                <div className="task-card" key={task.id}>
                  <div className="task-title">{task.title}</div>
                  <div className="task-desc">{task.description}</div>
                  <div className="task-footer">
                    <span className={`badge badge-${task.priority}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
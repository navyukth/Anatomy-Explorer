import { useState } from 'react';
import './ViewControls.css';

const VIEWS = [
  { id: 'front', label: 'Front', icon: '👤', position: [0, 1, 4] },
  { id: 'back', label: 'Back', icon: '🔙', position: [0, 1, -4] },
  { id: 'left', label: 'Left', icon: '◀', position: [-4, 1, 0] },
  { id: 'right', label: 'Right', icon: '▶', position: [4, 1, 0] },
  { id: 'top', label: 'Top', icon: '🔝', position: [0, 5, 0.01] },
];

export default function ViewControls({ onViewChange, onZoomIn, onZoomOut, onReset }) {
  const [activeView, setActiveView] = useState('front');

  const handleViewClick = (view) => {
    setActiveView(view.id);
    onViewChange(view.position);
  };

  return (
    <div className="view-controls" id="view-controls">
      {VIEWS.map((view) => (
        <button
          key={view.id}
          className={`view-btn ${activeView === view.id ? 'active' : ''}`}
          onClick={() => handleViewClick(view)}
          title={view.label}
        >
          <span className="view-btn-label">{view.label}</span>
        </button>
      ))}
      <div className="view-divider" />
      <button className="view-btn" onClick={onZoomIn} title="Zoom In">
        <span className="view-btn-icon">+</span>
      </button>
      <button className="view-btn" onClick={onZoomOut} title="Zoom Out">
        <span className="view-btn-icon">−</span>
      </button>
      <div className="view-divider" />
      <button className="view-btn" onClick={onReset} title="Reset Camera">
        <span className="view-btn-icon">⟳</span>
      </button>
    </div>
  );
}

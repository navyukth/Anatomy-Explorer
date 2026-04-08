import { getPartById } from '../../data/anatomyData';
import './InfoPanel.css';

export default function InfoPanel({ selectedPart, onClose }) {
  const isOpen = !!selectedPart;
  const partData = selectedPart ? getPartById(selectedPart) : null;

  return (
    <div className={`info-panel ${isOpen ? 'open' : ''}`} id="info-panel">
      <div className="info-panel-header">
        <span className="info-panel-title">Organ Details</span>
        <button
          className="info-panel-close"
          onClick={onClose}
          aria-label="Close panel"
        >
          ✕
        </button>
      </div>

      {partData ? (
        <div className="info-panel-content" key={partData.id}>
          <h2 className="info-organ-name">{partData.name}</h2>
          <div
            className="info-system-badge"
            style={{
              background: `${partData.system.color}15`,
              color: partData.system.color,
              border: `1px solid ${partData.system.color}30`,
            }}
          >
            <span
              className="info-badge-dot"
              style={{ background: partData.system.color }}
            />
            {partData.system.name}
          </div>

          <div className="info-section">
            <div className="info-section-label">Description</div>
            <p>{partData.description}</p>
          </div>

          <div className="info-funfact">
            <div className="info-funfact-label">Fun Fact</div>
            <p>{partData.funFact}</p>
          </div>
        </div>
      ) : (
        <div className="info-empty">
          <div className="info-empty-icon">🫀</div>
          <p>Click on an organ or body part to view details</p>
        </div>
      )}
    </div>
  );
}

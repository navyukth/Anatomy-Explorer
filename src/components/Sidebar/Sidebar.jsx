import { useState } from 'react';
import { BODY_SYSTEMS } from '../../data/anatomyData';
import './Sidebar.css';

export default function Sidebar({
  visibleSystems,
  onToggleSystem,
  selectedPart,
  onSelectPart,
  searchQuery,
  isOpen,
}) {
  const [expandedSystems, setExpandedSystems] = useState({ skeletal: true });

  const toggleExpand = (systemId) => {
    setExpandedSystems((prev) => ({ ...prev, [systemId]: !prev[systemId] }));
  };

  const systems = Object.values(BODY_SYSTEMS);

  const filteredSystems = searchQuery
    ? systems.map((sys) => ({
        ...sys,
        parts: sys.parts.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((sys) => sys.parts.length > 0)
    : systems;

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <div className="sidebar-title">Body Systems</div>
      <div className="sidebar-systems">
        {filteredSystems.map((system) => {
          const isVisible = visibleSystems[system.id] !== false;
          const isExpanded = expandedSystems[system.id] || !!searchQuery;

          return (
            <div key={system.id} className="system-group">
              <div
                className={`system-header ${isExpanded ? 'active' : ''}`}
                onClick={() => toggleExpand(system.id)}
              >
                <span className="system-icon">{system.icon}</span>
                <div className="system-info">
                  <div className="system-name">{system.name}</div>
                  <div className="system-count">{system.parts.length} parts</div>
                </div>
                <button
                  className={`system-toggle ${isVisible ? 'on' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSystem(system.id);
                  }}
                  aria-label={`Toggle ${system.name}`}
                >
                  <div
                    className="system-toggle-knob"
                    style={{ color: isVisible ? system.color : undefined }}
                  />
                </button>
                <span className={`system-chevron ${isExpanded ? 'open' : ''}`}>
                  ▶
                </span>
              </div>
              <div className={`system-parts ${isExpanded ? 'expanded' : ''}`}>
                {system.parts.map((part) => (
                  <button
                    key={part.id}
                    className={`part-item ${selectedPart === part.id ? 'selected' : ''}`}
                    onClick={() => onSelectPart(part.id)}
                  >
                    <span
                      className="part-dot"
                      style={{ background: system.color }}
                    />
                    <span className="part-name">{part.name}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

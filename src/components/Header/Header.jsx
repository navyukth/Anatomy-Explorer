import './Header.css';

export default function Header({ searchQuery, onSearchChange, onUploadClick, onToggleSidebar }) {
  return (
    <header className="header" id="header">
      <div className="header-left">
        <button
          className="header-sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <div className="header-logo">
          <div className="header-logo-icon">🧬</div>
          <span className="header-logo-text">ANATOMIX</span>
        </div>
        <div className="header-divider" />
        <div className="header-search">
          <span className="header-search-icon">🔍</span>
          <input
            id="search-input"
            type="text"
            placeholder="Search organs, systems..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <div className="header-right">
        <button
          className="header-upload-btn"
          id="upload-btn"
          onClick={onUploadClick}
        >
          <span>📤</span>
          Upload Model
        </button>
      </div>
    </header>
  );
}

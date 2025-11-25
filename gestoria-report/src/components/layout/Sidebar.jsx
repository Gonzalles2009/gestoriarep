import { content } from '../../data/content';

const Sidebar = ({ activeId, onSelect, isOpen, onClose, onLogout }) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand">
          <span>⚡</span> GESTORIA 2.0
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Закрыть меню">
          ✕
        </button>
      </div>
      <nav className="nav-menu">
        {content.chapters.map((chapter) => (
          <div
            key={chapter.id}
            className={`nav-item ${activeId === chapter.id ? 'active' : ''}`}
            onClick={() => {
              onSelect(chapter.id);
              onClose();
            }}
          >
            {chapter.title.split(': ')[1] || chapter.title}
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          🚪 Выйти
        </button>
      </div>
    </aside>
  </>
);

export default Sidebar;
